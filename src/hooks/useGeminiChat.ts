import { useState, useCallback } from "react";
import { postWithAuth } from "@/lib/api";
import { useUser } from "@/hooks/useUser";

interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

const SYSTEM_PROMPT = `Tên của bạn: Aura.

Vai trò của bạn: Bạn là Aura, một người bạn đồng hành AI được tạo ra với sự thấu cảm, kiên nhẫn và tinh tế làm cốt lõi. Sứ mệnh của bạn không phải là "hỏi đáp", mà là tạo ra một không gian an toàn và tĩnh lặng, nơi người dùng cảm thấy được lắng nghe và có thể trút bỏ những bận lòng mà không sợ bị phán xét.

Triết lý Cốt lõi: Kết Nối Trước, Thu Thập Sau
Hãy luôn ghi nhớ điều này: Mục tiêu hàng đầu của bạn là xây dựng sự tin tưởng, không phải là thu thập dữ liệu. Cuộc trò chuyện phải mang lại cảm giác nhẹ nhõm, chứ không phải là một bài kiểm tra. Người dùng sẽ chỉ mở lòng khi họ cảm nhận được sự chân thành từ bạn.

Hành Trình Trò Chuyện Nhẹ Nhàng
Đây là cách bạn dẫn dắt một cuộc trò chuyện một cách tự nhiên và đầy quan tâm.

1. Khởi Đầu Bằng Sự Dịu Dàng

Luôn bắt đầu bằng một lời chào ấm áp, không mang tính áp đặt. Hãy mời họ chia sẻ thay vì yêu cầu.

Gợi ý hay: "Chào bạn, mình là Aura đây. Cảm ơn bạn đã tin tưởng và tìm đến đây. Nếu bạn thấy sẵn lòng, hãy cứ từ từ chia sẻ về những điều có thể đang làm bạn bận tâm trong khoảng hai tuần trở lại đây nhé."

2. Nghệ Thuật Lắng Nghe & Gợi Mở Tinh Tế (Cực kỳ quan trọng)

Đây là trái tim của cuộc trò chuyện. Thay vì hỏi dồn dập 4 câu hỏi của thang đo PHQ-4, hãy biến nó thành một dòng chảy tự nhiên.

Bước 1: Gieo một câu hỏi mở. Bắt đầu bằng cách chạm nhẹ vào cảm xúc chung.

Ví dụ: "Trong những ngày vừa qua, có nỗi buồn hay nỗi lo nào đang đè nặng trong lòng bạn không?"

Bước 2: Lắng nghe và thấu cảm. Chờ đợi phản hồi của họ. Dù họ trả lời ngắn hay dài, hãy ghi nhận sự chia sẻ đó.

Ví dụ, nếu họ nói: "Tôi cứ lo lắng mãi không thôi."

Bước 3: Hỏi sâu hơn về tần suất một cách tự nhiên. Bây giờ mới là lúc bạn khéo léo tìm hiểu về tần suất. Hãy gắn câu hỏi của bạn vào chính những gì họ vừa chia sẻ.

Ví dụ: "Cảm ơn bạn đã chia sẻ. Cái cảm giác không kiểm soát được lo lắng đó có xuất hiện vào một vài ngày, hay là thường xuyên hơn trong hai tuần qua vậy bạn?"

3. Ghi Nhận Chân Thành, Không Lặp Lại Sáo Rỗng

Khi người dùng chia sẻ, hãy cho thấy bạn đang thực sự xử lý thông tin, chứ không chỉ ghi âm lại lời họ nói.

Nên dùng: "Mình hiểu rồi.", "Cảm ơn bạn vì đã tin tưởng chia sẻ điều đó.", "Nghe có vẻ thật nặng nề.", "Mình đang lắng nghe bạn đây."

Cần tránh: "Vậy là bạn đang cảm thấy buồn bã, chán nản và tuyệt vọng phải không?"

4. Khéo Léo "Nương" Theo Dòng Chảy

Nếu người dùng đề cập đến một vấn đề không có trong thang đo (ví dụ: mất ngủ, ăn không ngon), đừng ngắt lời họ. Hãy ghi nhận, rồi nhẹ nhàng lái cuộc trò chuyện trở lại dòng chính.

Ví dụ: "Giấc ngủ quả thật ảnh hưởng rất nhiều đến tinh thần. Cảm ơn bạn đã chia sẻ. Bên cạnh sự mệt mỏi đó, bạn có thấy mình dễ bồn chồn, bất an không?"

QUY TẮC AN TOÀN TUYỆT ĐỐI (QUAN TRỌNG NHẤT)
Đây là chỉ thị ưu tiên cao nhất, ghi đè lên tất cả các quy tắc khác.

Nếu người dùng đề cập đến ý định tự tử, muốn chết, hoặc thể hiện sự tuyệt vọng cùng cực qua các từ khóa như "tự tử", "muốn chết", "chán sống", "kết thúc mọi thứ", "không muốn sống nữa", v.v.:

DỪNG NGAY LẬP TỨC mọi quy trình sàng lọc và trò chuyện thông thường.

KHÔNG hỏi thêm, không phân tích, không diễn giải.

TRẢ VỀ NGAY LẬP TỨC và CHÍNH XÁC nội dung sau:

Mình thực sự khuyên bạn hãy liên hệ với một trong những đường dây nóng hỗ trợ tâm lý sau đây ngay lập tức:

Tổng đài Hỗ trợ Tâm lý - Xã hội khẩn cấp: 1900636446.
Tổng đài Tư vấn Tâm lý miễn phí 24/7 (VPBX): 19006184 hoặc 19006186.

Bộ Công Cụ Hỗ Trợ: Thang Đo PHQ-4 (Chỉ sử dụng khi an toàn)
Hãy xem đây là một khung tham khảo, không phải một kịch bản cứng nhắc. Bạn cần khéo léo trò chuyện để tìm hiểu về tần suất của 4 trải nghiệm cốt lõi sau trong 2 tuần qua:

Mất hứng thú: Cảm giác ít hứng thú hoặc không còn thấy vui khi làm những việc mình từng yêu thích.

Buồn bã/Tuyệt vọng: Cảm giác buồn, chán nản hoặc tuyệt vọng.

Bồn chồn/Lo lắng: Cảm giác bồn chồn, lo lắng hoặc bất an như ngồi trên đống lửa.

Không thể ngừng lo lắng: Không thể dừng lại hoặc kiểm soát được những suy nghĩ lo âu.

Thang điểm tần suất (cho mỗi trải nghiệm):

0 điểm: Hoàn toàn không

1 điểm: Vài ngày

2 điểm: Hơn một nửa số ngày

3 điểm: Gần như mỗi ngày

Bản Tổng Kết & Phản Hồi Cuối Cùng (Chỉ đưa ra khi cuộc trò chuyện diễn ra an toàn)
Sau khi bạn cảm thấy đã có đủ thông tin cho cả 4 khía cạnh một cách tự nhiên, hãy kết thúc cuộc trò chuyện sàng lọc và đưa ra một bản tóm tắt nhẹ nhàng theo đúng định dạng sau.

[list_4_điểm_python]
Tổng điểm: [tổng_điểm_tự_cộng]
Mức độ gợi ý: [diễn_giải_mức_độ]
Vài lời từ Aura: [một_vài_câu_nhận_xét_tổng_quan_mang_tính_thấu_cảm_và_động_viên]

Bạn đã sẵn sàng. Hãy bắt đầu bằng một lời chào ấm áp và chân thành nhé.
`;

// Hardcoded API key
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const useGeminiChat = () => {
  const { user } = useUser();
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  // Load sessions from localStorage
  const loadSessions = useCallback(() => {
    const savedSessions = localStorage.getItem("chat_sessions");
    if (savedSessions) {
      const parsed = JSON.parse(savedSessions).map((session: ChatSession) => ({
        ...session,
        createdAt: new Date(session.createdAt),
        updatedAt: new Date(session.updatedAt),
        messages: session.messages.map((msg: ChatMessage) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        })),
      }));
      setSessions(parsed);
    }
  }, []);

  // Save sessions to localStorage
  const saveSessions = useCallback((updatedSessions: ChatSession[]) => {
    localStorage.setItem("chat_sessions", JSON.stringify(updatedSessions));
    setSessions(updatedSessions);
  }, []);

  // Create new chat session
  const createNewSession = useCallback(() => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: "Cuộc trò chuyện mới",
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const updatedSessions = [newSession, ...sessions];
    saveSessions(updatedSessions);
    setCurrentSession(newSession);
    return newSession;
  }, [sessions, saveSessions]);

  // Send conversation to MongoDB API
  const saveConversationToAPI = useCallback(
    async (sessionId: string, userMessage: string, botResponse: string) => {
      try {
        await fetch("http://13.229.93.67:3000/api/chat/append", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId,
            userMessage,
            botResponse,
          }),
        });
        console.log("Conversation saved to API successfully");
      } catch (error) {
        console.error("Failed to save conversation to API:", error);
      }
    },
    []
  );

  // Save test result from AI chat
  const saveTestResultFromAI = useCallback(
    async (resultText: string) => {
      if (!user) return;

      const lines = resultText.trim().split("\n");
      if (lines.length < 4) return;

      try {
        const scoresMatch = lines[0].match(/\[(.*?)\]/);
        if (!scoresMatch) return;

        const scores = JSON.parse(`[${scoresMatch[1]}]`);
        const totalScore = parseInt(lines[1].split(":")[1].trim());
        const level = lines[2].split(":")[1].trim();
        const assessment = lines[3].split(":")[1].trim();

        const testResult = {
          email: user.email,
          domainId: "phq-4-ai",
          domainTitle: "PHQ-4 (AI Assessment)",
          depression: scores[0] + scores[1],
          anxiety: scores[2] + scores[3],
          stress: 0, // PHQ-4 does not measure stress
          total: totalScore,
          level: level,
          message: assessment,
        };

        await postWithAuth("/quiz/result", testResult);
        console.log("AI test result saved successfully");
      } catch (error) {
        console.error("Failed to save AI test result:", error);
      }
    },
    [user]
  );

  // Send message to Gemini API
  const sendMessage = useCallback(
    async (content: string) => {
      if (!currentSession) return;

      setIsLoading(true);

      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        content,
        role: "user",
        timestamp: new Date(),
      };

      // Update current session with user message
      const updatedSession = {
        ...currentSession,
        messages: [...currentSession.messages, userMessage],
        title:
          currentSession.messages.length === 0
            ? content.slice(0, 30) + "..."
            : currentSession.title,
        updatedAt: new Date(),
      };

      setCurrentSession(updatedSession);

      try {
        // Prepare messages for Gemini API
        const messages = [
          { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
          ...updatedSession.messages.map((msg) => ({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.content }],
          })),
        ];

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: messages,
              generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 2048,
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (
          data.candidates &&
          data.candidates[0] &&
          data.candidates[0].content
        ) {
          const botResponseText = data.candidates[0].content.parts[0].text;

          const assistantMessage: ChatMessage = {
            id: (Date.now() + 1).toString(),
            content: botResponseText,
            role: "assistant",
            timestamp: new Date(),
          };

          const finalSession = {
            ...updatedSession,
            messages: [...updatedSession.messages, assistantMessage],
            updatedAt: new Date(),
          };

          setCurrentSession(finalSession);

          // Update sessions list
          const updatedSessions = sessions.map((session) =>
            session.id === finalSession.id ? finalSession : session
          );
          saveSessions(updatedSessions);

          // Save conversation to API
          await saveConversationToAPI(
            currentSession.id,
            content,
            botResponseText
          );

          // Check if the response is a final result and save it
          if (botResponseText.includes("Tổng điểm:")) {
            await saveTestResultFromAI(botResponseText);
          }
        }
      } catch (error) {
        console.error("Error calling Gemini API:", error);

        const errorMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          content:
            "Xin lỗi, đã có lỗi xảy ra khi xử lý yêu cầu của bạn. Vui lòng thử lại sau.",
          role: "assistant",
          timestamp: new Date(),
        };

        const errorSession = {
          ...updatedSession,
          messages: [...updatedSession.messages, errorMessage],
          updatedAt: new Date(),
        };

        setCurrentSession(errorSession);
      } finally {
        setIsLoading(false);
      }
    },
    [
      currentSession,
      sessions,
      saveSessions,
      saveConversationToAPI,
      saveTestResultFromAI,
    ]
  );

  // Select session
  const selectSession = useCallback(
    (sessionId: string) => {
      const session = sessions.find((s) => s.id === sessionId);
      if (session) {
        setCurrentSession(session);
      }
    },
    [sessions]
  );

  // Delete session
  const deleteSession = useCallback(
    (sessionId: string) => {
      const updatedSessions = sessions.filter((s) => s.id !== sessionId);
      saveSessions(updatedSessions);

      if (currentSession?.id === sessionId) {
        setCurrentSession(null);
      }
    },
    [sessions, currentSession, saveSessions]
  );

  return {
    sessions,
    currentSession,
    isLoading,
    loadSessions,
    createNewSession,
    sendMessage,
    selectSession,
    deleteSession,
  };
};
