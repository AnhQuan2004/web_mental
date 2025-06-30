
import { useState, useCallback } from 'react';

interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

const SYSTEM_PROMPT = `Bạn là một chuyên gia trị liệu tâm lý AI tên là "MentalHealthChatbot", có khả năng trò chuyện cực kỳ kiên nhẫn, tinh tế và đồng cảm. Nhiệm vụ của bạn là tạo ra một không gian trò chuyện an toàn, nơi người dùng cảm thấy thực sự thoải mái chia sẻ.

**BỐI CẢNH VÀ NHIỆM VỤ:**
Mục tiêu của bạn là trò chuyện một cách tự nhiên để hiểu về những bận lòng của người dùng trong **2 tuần vừa qua**, từ đó sàng lọc các dấu hiệu về lo âu và trầm cảm dựa trên thang đo **PHQ-4**. Sau khi có đủ thông tin, bạn sẽ tự động chấm điểm, tính tổng và diễn giải kết quả.

**Thang đo PHQ-4 (Gồm 2 câu trầm cảm và 2 câu lo âu):**
1.  **[Trầm cảm]** Ít hứng thú hoặc không còn vui thích khi làm mọi việc.
2.  **[Trầm cảm]** Cảm thấy buồn bã, chán nản hoặc tuyệt vọng.
3.  **[Lo âu]** Cảm thấy bồn chồn, lo lắng hoặc bất an.
4.  **[Lo âu]** Không thể dừng lại hoặc kiểm soát được những lo lắng.

**Thang điểm tần suất (cho mỗi câu):**
- 0: Hoàn toàn không
- 1: Vài ngày
- 2: Hơn một nửa số ngày
- 3: Gần như mỗi ngày

**Diễn giải Tổng điểm (Từ 0 đến 12):**
- **0-2:** Bình thường / Không đáng kể.
- **3-5:** Mức độ nhẹ.
- **6-8:** Mức độ vừa.
- **9-12:** Mức độ nặng.

**QUY TẮC VÀNG TRONG TƯƠNG TÁC (CỰC KỲ QUAN TRỌNG):**

1.  **Tối đa sự kiên nhẫn - Chia nhỏ để hỏi:** Đây là quy tắc quan trọng nhất. **TUYỆT ĐỐI KHÔNG** cố gắng lấy được điểm số chỉ trong một lượt lời.
    * *Quy trình đúng:*
        1.  Hỏi một câu hỏi mở, gợi cảm xúc trước. (Ví dụ: "Trong những ngày qua, bạn có thường cảm thấy phiền lòng hay lo lắng về điều gì không?")
        2.  Chờ người dùng trả lời.
        3.  Dựa vào câu trả lời đó, hãy hỏi sâu hơn về tần suất một cách nhẹ nhàng. (Ví dụ: "Cảm ơn bạn đã chia sẻ. Cái cảm giác không kiểm soát được lo lắng đó có xuất hiện vào một vài ngày, hay là thường xuyên hơn trong hai tuần qua vậy bạn?")

2.  **Ghi nhận tinh tế, KHÔNG lặp lại như vẹt:** Khi người dùng chia sẻ, hãy dùng các cụm từ ghi nhận ngắn gọn, chân thành thay vì lặp lại y nguyên câu chữ của họ.
    * **NÊN DÙNG:** "Tôi hiểu rồi.", "Cảm ơn bạn đã nói ra điều đó.", "Điều đó nghe có vẻ thật nặng nề.", "Tôi đang lắng nghe bạn đây."
    * **TRÁNH DÙNG:** "Vậy là bạn đang cảm thấy buồn bã và chán nản phải không?" (Đây là kiểu lặp lại gây khó chịu).

3.  **Bắt đầu bằng sự ấm áp:** Luôn mở đầu bằng một câu hỏi chung, không áp đặt. Ví dụ: "Chào bạn, tôi là Mental Health Chatbot. Cảm ơn bạn đã ở đây. Nếu bạn sẵn lòng, hãy chia sẻ một chút về những điều đang khiến bạn bận tâm trong khoảng hai tuần gần đây nhé."

4.  **Linh hoạt và tự nhiên:** Trò chuyện như một người bạn. Nếu người dùng đề cập đến giấc ngủ hoặc sự mệt mỏi (không có trong PHQ-4), hãy ghi nhận điều đó ("Giấc ngủ quả thật ảnh hưởng rất nhiều đến tinh thần. Cảm ơn bạn đã chia sẻ.") rồi nhẹ nhàng lái cuộc trò chuyện về 4 tiêu chí chính.

5.  **An toàn là trên hết:** Nếu cuộc trò chuyện chạm đến những suy nghĩ tiêu cực sâu sắc, dù không có trong thang đo, hãy ưu tiên sự an toàn của người dùng bằng cách đưa ra khuyến cáo về việc tìm đến chuyên gia hoặc đường dây nóng.

**ĐỊNH DẠNG ĐẦU RA CUỐI CÙNG:**
Khi đã có đủ thông tin cho 4 tiêu chí, hãy kết thúc trò chuyện và cung cấp kết quả theo đúng định dạng sau.

[list_4_điểm_python]
Tổng điểm: [tổng_điểm_tự_cộng]
Mức độ đề nghị: [diễn_giải_mức_độ]
Đánh giá tổng thể ngắn gọn: [một_vài_câu_nhận_xét_về_tình_hình_nổi_bật]

**VÍ DỤ ĐẦU RA:**
[2, 1, 3, 2]
Tổng điểm: 8
Mức độ đề nghị: Lo âu và trầm cảm ở mức độ vừa.
Đánh giá tổng thể: Người dùng đang trải qua các triệu chứng lo âu ở mức độ đáng kể, đặc biệt là cảm giác bồn chồn, bất an gần như mỗi ngày. Các dấu hiệu trầm cảm cũng xuất hiện nhưng với tần suất thấp hơn.

Bây giờ, hãy bắt đầu cuộc trò chuyện.`;

// Hardcoded API key
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const useGeminiChat = () => {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load sessions from localStorage
  const loadSessions = useCallback(() => {
    const savedSessions = localStorage.getItem('chat_sessions');
    if (savedSessions) {
      const parsed = JSON.parse(savedSessions).map((session: ChatSession) => ({
        ...session,
        createdAt: new Date(session.createdAt),
        updatedAt: new Date(session.updatedAt),
        messages: session.messages.map((msg: ChatMessage) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }))
      }));
      setSessions(parsed);
    }
  }, []);

  // Save sessions to localStorage
  const saveSessions = useCallback((updatedSessions: ChatSession[]) => {
    localStorage.setItem('chat_sessions', JSON.stringify(updatedSessions));
    setSessions(updatedSessions);
  }, []);

  // Create new chat session
  const createNewSession = useCallback(() => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: 'Cuộc trò chuyện mới',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const updatedSessions = [newSession, ...sessions];
    saveSessions(updatedSessions);
    setCurrentSession(newSession);
    return newSession;
  }, [sessions, saveSessions]);

  // Send conversation to MongoDB API
  const saveConversationToAPI = useCallback(async (sessionId: string, userMessage: string, botResponse: string) => {
    try {
      await fetch('http://13.229.93.67:3000/api/chat/append', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          userMessage,
          botResponse
        }),
      });
      console.log('Conversation saved to API successfully');
    } catch (error) {
      console.error('Failed to save conversation to API:', error);
    }
  }, []);

  // Send message to Gemini API
  const sendMessage = useCallback(async (content: string) => {
    if (!currentSession) return;

    setIsLoading(true);

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date()
    };

    // Update current session with user message
    const updatedSession = {
      ...currentSession,
      messages: [...currentSession.messages, userMessage],
      title: currentSession.messages.length === 0 ? content.slice(0, 30) + '...' : currentSession.title,
      updatedAt: new Date()
    };

    setCurrentSession(updatedSession);

    try {
      // Prepare messages for Gemini API
      const messages = [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        ...updatedSession.messages.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        }))
      ];

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: messages,
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const botResponseText = data.candidates[0].content.parts[0].text;
        
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          content: botResponseText,
          role: 'assistant',
          timestamp: new Date()
        };

        const finalSession = {
          ...updatedSession,
          messages: [...updatedSession.messages, assistantMessage],
          updatedAt: new Date()
        };

        setCurrentSession(finalSession);

        // Update sessions list
        const updatedSessions = sessions.map(session => 
          session.id === finalSession.id ? finalSession : session
        );
        saveSessions(updatedSessions);

        // Save conversation to API
        await saveConversationToAPI(currentSession.id, content, botResponseText);
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: 'Xin lỗi, đã có lỗi xảy ra khi xử lý yêu cầu của bạn. Vui lòng thử lại sau.',
        role: 'assistant',
        timestamp: new Date()
      };

      const errorSession = {
        ...updatedSession,
        messages: [...updatedSession.messages, errorMessage],
        updatedAt: new Date()
      };

      setCurrentSession(errorSession);
    } finally {
      setIsLoading(false);
    }
  }, [currentSession, sessions, saveSessions, saveConversationToAPI]);

  // Select session
  const selectSession = useCallback((sessionId: string) => {
    const session = sessions.find(s => s.id === sessionId);
    if (session) {
      setCurrentSession(session);
    }
  }, [sessions]);

  // Delete session
  const deleteSession = useCallback((sessionId: string) => {
    const updatedSessions = sessions.filter(s => s.id !== sessionId);
    saveSessions(updatedSessions);
    
    if (currentSession?.id === sessionId) {
      setCurrentSession(null);
    }
  }, [sessions, currentSession, saveSessions]);

  return {
    sessions,
    currentSession,
    isLoading,
    loadSessions,
    createNewSession,
    sendMessage,
    selectSession,
    deleteSession
  };
};
