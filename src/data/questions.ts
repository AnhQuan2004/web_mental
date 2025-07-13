export interface QuestionOption {
  value: string;
  label: string;
}

export interface Question {
  id: number;
  question: string;
  category: string;
  options: QuestionOption[];
}

export interface QuestionDomain {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  targetAudience: string;
  purpose: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  iconType: string;
}

// 1. Thang Đo Trầm Cảm Beck (BDI)
export const bdiQuestions: Question[] = [
  {
    id: 1,
    question: "Buồn bã",
    category: "depression",
    options: [
      { value: "0", label: "Tôi không cảm thấy buồn." },
      { value: "1", label: "Nhiều lúc tôi cảm thấy buồn." },
      { value: "2", label: "Lúc nào tôi cũng cảm thấy buồn." },
      {
        value: "3",
        label: "Tôi rất buồn hoặc rất bất hạnh đến mức không thể chịu được.",
      },
    ],
  },
  {
    id: 2,
    question: "Bi quan",
    category: "depression",
    options: [
      { value: "0", label: "Tôi không nản lòng về tương lai." },
      { value: "1", label: "Tôi cảm thấy nản lòng về tương lai hơn trước." },
      {
        value: "2",
        label: "Tôi cảm thấy mình chẳng có gì mong đợi ở tương lai cả.",
      },
      {
        value: "3",
        label:
          "Tôi cảm thấy tương lai tuyệt vọng và tình hình chỉ có thể tiếp tục xấu đi.",
      },
    ],
  },
  {
    id: 3,
    question: "Cảm giác thất bại",
    category: "depression",
    options: [
      { value: "0", label: "Tôi không cảm thấy như bị thất bại." },
      {
        value: "1",
        label: "Tôi thấy mình thất bại nhiều hơn những người khác.",
      },
      {
        value: "2",
        label: "Nhìn lại cuộc đời, tôi thấy mình đã có quá nhiều thất bại.",
      },
      { value: "3", label: "Tôi cảm thấy mình là một người hoàn toàn thất bại." },
    ],
  },
  {
    id: 4,
    question: "Mất hứng thú",
    category: "depression",
    options: [
      {
        value: "0",
        label: "Tôi còn thích thú với những điều mà trước đây tôi vẫn thường thích.",
      },
      {
        value: "1",
        label: "Tôi ít thấy thích những điều mà trước đây tôi vẫn thường ưa thích.",
      },
      {
        value: "2",
        label:
          "Tôi còn rất ít thích thú về những điều trước đây tôi vẫn thường thích.",
      },
      { value: "3", label: "Tôi không còn chút thích thú nào nữa." },
    ],
  },
  {
    id: 5,
    question: "Cảm giác tội lỗi",
    category: "depression",
    options: [
      {
        value: "0",
        label: "Tôi hoàn toàn không cảm thấy có tội lỗi gì ghê gớm cả.",
      },
      {
        value: "1",
        label: "Phần nhiều những việc tôi đã làm tôi đều cảm thấy có tội.",
      },
      { value: "2", label: "Phần lớn thời gian tôi cảm thấy mình có tội." },
      { value: "3", label: "Lúc nào tôi cũng cảm thấy mình có tội." },
    ],
  },
  {
    id: 6,
    question: "Cảm giác bị trừng phạt",
    category: "depression",
    options: [
      { value: "0", label: "Tôi không cảm thấy đang bị trừng phạt." },
      { value: "1", label: "Tôi cảm thấy có lẽ mình đang bị trừng phạt." },
      { value: "2", label: "Tôi mong chờ bị trừng phạt." },
      { value: "3", label: "Tôi cảm thấy mình đang bị trừng phạt." },
    ],
  },
  {
    id: 7,
    question: "Không hài lòng về bản thân",
    category: "depression",
    options: [
      { value: "0", label: "Tôi thấy bản thân mình vẫn như trước kia." },
      { value: "1", label: "Tôi không còn tin tưởng vào bản thân." },
      { value: "2", label: "Tôi thất vọng với bản thân." },
      { value: "3", label: "Tôi ghét bản thân mình." },
    ],
  },
  {
    id: 8,
    question: "Tự buộc tội",
    category: "depression",
    options: [
      {
        value: "0",
        label: "Tôi không phê phán hoặc đổ lỗi cho bản thân hơn trước kia.",
      },
      { value: "1", label: "Tôi phê phán bản thân mình nhiều hơn trước kia." },
      {
        value: "2",
        label: "Tôi phê phán bản thân về tất cả những lỗi lầm của mình.",
      },
      {
        value: "3",
        label: "Tôi đổ lỗi cho bản thân về tất cả mọi điều tồi tệ xảy ra.",
      },
    ],
  },
  {
    id: 9,
    question: "Ý tưởng tự sát",
    category: "depression",
    options: [
      { value: "0", label: "Tôi không có ý nghĩ tự sát." },
      { value: "1", label: "Tôi có ý nghĩ tự sát nhưng không thực hiện." },
      { value: "2", label: "Tôi muốn tự sát." },
      { value: "3", label: "Nếu có cơ hội tôi sẽ tự sát." },
    ],
  },
  {
    id: 10,
    question: "Khóc lóc",
    category: "depression",
    options: [
      { value: "0", label: "Tôi không khóc nhiều hơn trước kia." },
      { value: "1", label: "Tôi hay khóc nhiều hơn trước." },
      { value: "2", label: "Tôi thường khóc vì những điều nhỏ nhặt." },
      { value: "3", label: "Tôi thấy muốn khóc nhưng không thể khóc được." },
    ],
  },
  {
    id: 11,
    question: "Kích động",
    category: "depression",
    options: [
      { value: "0", label: "Tôi không dễ bồn chồn và căng thẳng hơn thường lệ." },
      {
        value: "1",
        label: "Tôi cảm thấy dễ bồn chồn và căng thẳng hơn thường lệ.",
      },
      {
        value: "2",
        label: "Tôi cảm thấy bồn chồn và căng thẳng đến mức khó có thể ngồi yên được.",
      },
      {
        value: "3",
        label:
          "Tôi thấy rất bồn chồn và kích động đến mức phải đi lại liên tục hoặc làm việc gì đó.",
      },
    ],
  },
  {
    id: 12,
    question: "Mất quan tâm",
    category: "depression",
    options: [
      {
        value: "0",
        label:
          "Tôi không mất sự quan tâm đến những người xung quanh hoặc các hoạt động khác.",
      },
      {
        value: "1",
        label: "Tôi ít quan tâm đến mọi người, mọi việc xung quanh hơn trước.",
      },
      {
        value: "2",
        label: "Tôi mất hầu hết sự quan tâm đến mọi người, mọi việc xung quanh.",
      },
      { value: "3", label: "Tôi không còn quan tâm đến bất kỳ điều gì nữa." },
    ],
  },
  {
    id: 13,
    question: "Thiếu quyết đoán",
    category: "depression",
    options: [
      { value: "0", label: "Tôi quyết định mọi việc cũng tốt như trước." },
      { value: "1", label: "Tôi thấy khó quyết định mọi việc hơn trước." },
      {
        value: "2",
        label: "Tôi thấy khó quyết định mọi việc hơn trước rất nhiều.",
      },
      { value: "3", label: "Tôi chẳng còn có thể quyết định được việc gì nữa." },
    ],
  },
  {
    id: 14,
    question: "Cảm giác vô dụng",
    category: "depression",
    options: [
      { value: "0", label: "Tôi không cảm thấy mình là người vô dụng." },
      {
        value: "1",
        label: "Tôi không cho rằng mình có giá trị và có ích như trước kia.",
      },
      {
        value: "2",
        label: "Tôi cảm thấy mình vô dụng hơn so với những người xung quanh.",
      },
      { value: "3", label: "Tôi thấy mình là người hoàn toàn vô dụng." },
    ],
  },
  {
    id: 15,
    question: "Mất năng lượng",
    category: "depression",
    options: [
      { value: "0", label: "Tôi thấy mình vẫn tràn đầy sức lực như trước đây." },
      { value: "1", label: "Sức lực của tôi kém hơn trước." },
      { value: "2", label: "Tôi không đủ sức lực để làm được nhiều việc nữa." },
      { value: "3", label: "Tôi hoàn toàn không thể làm được bất cứ việc gì." },
    ],
  },
  {
    id: 16,
    question: "Thay đổi giấc ngủ",
    category: "depression",
    options: [
      { value: "0", label: "Tôi ngủ vẫn như thường lệ." },
      { value: "1", label: "Tôi ngủ không ngon như trước." },
      {
        value: "2",
        label: "Tôi thức dậy sớm hơn 1-2 giờ và thấy khó ngủ lại.",
      },
      {
        value: "3",
        label: "Tôi thức dậy sớm hơn vài giờ và không thể ngủ lại được.",
      },
    ],
  },
  {
    id: 17,
    question: "Cáu kỉnh",
    category: "depression",
    options: [
      { value: "0", label: "Tôi không cảm thấy cáu kỉnh hơn thường lệ." },
      { value: "1", label: "Tôi dễ cáu kỉnh hơn thường lệ." },
      { value: "2", label: "Tôi cảm thấy cáu kỉnh gần như mọi lúc." },
      { value: "3", label: "Lúc nào tôi cũng cáu kỉnh." },
    ],
  },
  {
    id: 18,
    question: "Thay đổi khẩu vị",
    category: "depression",
    options: [
      { value: "0", label: "Tôi ăn ngon miệng như thường lệ." },
      { value: "1", label: "Tôi ăn không ngon miệng như trước." },
      { value: "2", label: "Cảm giác ngon miệng của tôi rất kém." },
      { value: "3", label: "Tôi hoàn toàn không ăn được gì." },
    ],
  },
  {
    id: 19,
    question: "Khó tập trung",
    category: "depression",
    options: [
      { value: "0", label: "Tôi có thể tập trung tốt như mọi khi." },
      { value: "1", label: "Tôi không thể tập trung tốt như thường lệ." },
      { value: "2", label: "Tôi thấy khó giữ được sự tập trung lâu." },
      { value: "3", label: "Tôi thấy mình không thể tập trung vào bất cứ điều gì." },
    ],
  },
  {
    id: 20,
    question: "Mệt mỏi",
    category: "depression",
    options: [
      { value: "0", label: "Tôi không mệt mỏi hơn thường lệ." },
      { value: "1", label: "Tôi dễ mệt hơn thường lệ." },
      { value: "2", label: "Tôi mệt mỏi khi làm bất cứ việc gì." },
      { value: "3", label: "Tôi quá mệt mỏi để có thể làm bất cứ việc gì." },
    ],
  },
  {
    id: 21,
    question: "Mất hứng thú tình dục",
    category: "depression",
    options: [
      {
        value: "0",
        label: "Tôi không nhận thấy có thay đổi gì về hứng thú tình dục.",
      },
      { value: "1", label: "Tôi ít hứng thú với tình dục hơn trước." },
      { value: "2", label: "Hiện tại tôi ít hứng thú với tình dục hơn nhiều." },
      { value: "3", label: "Tôi hoàn toàn mất hứng thú với tình dục." },
    ],
  },
];

// 2. Bộ Câu Hỏi Sức Khỏe Bệnh Nhân (PHQ-9)
export const phq9Questions: Question[] = [
  {
    id: 1,
    question: "Ít hứng thú hoặc là không có niềm vui thích làm việc gì.",
    category: "depression",
    options: [
      { value: "0", label: "Hầu như không" },
      { value: "1", label: "Một vài ngày" },
      { value: "2", label: "Hơn một nửa số thời gian" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 2,
    question: "Cảm thấy chán nản, kiệt sức, hay tuyệt vọng.",
    category: "depression",
    options: [
      { value: "0", label: "Hầu như không" },
      { value: "1", label: "Một vài ngày" },
      { value: "2", label: "Hơn một nửa số thời gian" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 3,
    question: "Khó ngủ, ngủ không lâu hoặc ngủ quá nhiều.",
    category: "depression",
    options: [
      { value: "0", label: "Hầu như không" },
      { value: "1", label: "Một vài ngày" },
      { value: "2", label: "Hơn một nửa số thời gian" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 4,
    question: "Cảm thấy mệt mỏi hoặc thiếu năng lượng.",
    category: "depression",
    options: [
      { value: "0", label: "Hầu như không" },
      { value: "1", label: "Một vài ngày" },
      { value: "2", label: "Hơn một nửa số thời gian" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 5,
    question: "Chán ăn hoặc ăn quá nhiều.",
    category: "depression",
    options: [
      { value: "0", label: "Hầu như không" },
      { value: "1", label: "Một vài ngày" },
      { value: "2", label: "Hơn một nửa số thời gian" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 6,
    question:
      "Cảm thấy bản thân tồi tệ, cho rằng mình là người thất bại hoặc đã làm thất vọng bản thân và gia đình.",
    category: "depression",
    options: [
      { value: "0", label: "Hầu như không" },
      { value: "1", label: "Một vài ngày" },
      { value: "2", label: "Hơn một nửa số thời gian" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 7,
    question:
      "Khó tập trung vào một việc gì đó, ví dụ như đọc báo hay xem tivi.",
    category: "depression",
    options: [
      { value: "0", label: "Hầu như không" },
      { value: "1", label: "Một vài ngày" },
      { value: "2", label: "Hơn một nửa số thời gian" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 8,
    question:
      "Di chuyển hoặc nói năng quá chậm chạp khiến người khác chú ý; hoặc ngược lại - quá lo lắng, bồn chồn nên đi lại quá nhiều hơn bình thường.",
    category: "depression",
    options: [
      { value: "0", label: "Hầu như không" },
      { value: "1", label: "Một vài ngày" },
      { value: "2", label: "Hơn một nửa số thời gian" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 9,
    question:
      "Nghĩ rằng mình chết đi sẽ tốt hơn, hoặc có ý nghĩ tự làm đau hay tổn thương cơ thể.",
    category: "depression",
    options: [
      { value: "0", label: "Hầu như không" },
      { value: "1", label: "Một vài ngày" },
      { value: "2", label: "Hơn một nửa số thời gian" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
];

// 3. Thang Đo Trầm Cảm - Lo Âu - Stress (DASS-21)
export const dass21Questions: Question[] = [
  // Stress
  {
    id: 1,
    question: "Tôi thấy khó mà thoải mái được.",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 2,
    question: "Tôi đã phản ứng thái quá khi có những sự việc xảy ra.",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 3,
    question: "Tôi thấy mình đang suy nghĩ quá nhiều.",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 4,
    question: "Tôi thấy bản thân dễ bị kích động.",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 5,
    question: "Tôi thấy khó thư giãn được.",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 6,
    question:
      "Tôi không chấp nhận được việc có cái gì đó xen vào cản trở việc tôi đang làm.",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 7,
    question: "Tôi thấy mình khá dễ phật ý, tự ái.",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  // Anxiety
  {
    id: 8,
    question: "Tôi bị khô miệng.",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 9,
    question:
      "Tôi bị rối loạn nhịp thở (thở gấp, khó thở dù chẳng làm việc gì nặng).",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 10,
    question: "Tôi bị ra mồ hôi (chẳng hạn như mồ hôi tay...).",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 11,
    question:
      "Tôi lo lắng về những tình huống có thể khiến tôi hoảng sợ hoặc biến tôi thành trò cười.",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 12,
    question: "Tôi thấy mình gần như hoảng loạn.",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 13,
    question:
      "Tôi nghe thấy rõ tiếng nhịp tim dù chẳng làm việc gì cả (ví dụ, tiếng nhịp tim tăng, tiếng tim loạn nhịp).",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 14,
    question: "Tôi hay sợ vô cớ.",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  // Depression
  {
    id: 15,
    question: "Tôi không thấy có chút cảm xúc tích cực nào.",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 16,
    question: "Tôi thấy khó bắt tay vào công việc.",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 17,
    question: "Tôi thấy mình chẳng có gì để mong đợi cả.",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 18,
    question: "Tôi cảm thấy chán nản, thất vọng.",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 19,
    question: "Tôi không thấy hăng hái với bất kỳ việc gì nữa.",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 20,
    question: "Tôi cảm thấy mình chẳng đáng làm người.",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
  {
    id: 21,
    question: "Tôi thấy cuộc sống vô nghĩa.",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào cả" },
      { value: "1", label: "Đúng với tôi một phần, hoặc thỉnh thoảng mới đúng" },
      { value: "2", label: "Đúng với tôi phần nhiều, hoặc phần lớn thời gian là đúng" },
      { value: "3", label: "Hoàn toàn đúng với tôi, hoặc hầu hết thời gian là đúng" },
    ],
  },
];

// 4. Thang Tự Đánh Giá Trầm Cảm Zung (SDS)
export const zungSdsQuestions: Question[] = [
  {
    id: 1,
    question: "Tôi cảm thấy chán nản và buồn bã.",
    category: "depression",
    options: [
      { value: "1", label: "Một chút thời gian" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Phần lớn thời gian" },
      { value: "4", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 2,
    question: "Buổi sáng là lúc tôi cảm thấy tốt nhất.",
    category: "depression",
    options: [
      { value: "4", label: "Một chút thời gian" },
      { value: "3", label: "Thỉnh thoảng" },
      { value: "2", label: "Phần lớn thời gian" },
      { value: "1", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 3,
    question: "Tôi có những cơn khóc hoặc cảm thấy muốn khóc.",
    category: "depression",
    options: [
      { value: "1", label: "Một chút thời gian" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Phần lớn thời gian" },
      { value: "4", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 4,
    question: "Tôi gặp khó khăn khi ngủ vào ban đêm.",
    category: "depression",
    options: [
      { value: "1", label: "Một chút thời gian" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Phần lớn thời gian" },
      { value: "4", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 5,
    question: "Tôi ăn uống vẫn như trước đây.",
    category: "depression",
    options: [
      { value: "4", label: "Một chút thời gian" },
      { value: "3", label: "Thỉnh thoảng" },
      { value: "2", label: "Phần lớn thời gian" },
      { value: "1", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 6,
    question: "Tôi vẫn hứng thú với tình dục.",
    category: "depression",
    options: [
      { value: "4", label: "Một chút thời gian" },
      { value: "3", label: "Thỉnh thoảng" },
      { value: "2", label: "Phần lớn thời gian" },
      { value: "1", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 7,
    question: "Tôi nhận thấy mình đang sụt cân.",
    category: "depression",
    options: [
      { value: "1", label: "Một chút thời gian" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Phần lớn thời gian" },
      { value: "4", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 8,
    question: "Tôi bị táo bón.",
    category: "depression",
    options: [
      { value: "1", label: "Một chút thời gian" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Phần lớn thời gian" },
      { value: "4", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 9,
    question: "Tim tôi đập nhanh hơn bình thường.",
    category: "depression",
    options: [
      { value: "1", label: "Một chút thời gian" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Phần lớn thời gian" },
      { value: "4", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 10,
    question: "Tôi cảm thấy mệt mỏi không vì lý do gì.",
    category: "depression",
    options: [
      { value: "1", label: "Một chút thời gian" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Phần lớn thời gian" },
      { value: "4", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 11,
    question: "Đầu óc tôi vẫn minh mẫn như trước đây.",
    category: "depression",
    options: [
      { value: "4", label: "Một chút thời gian" },
      { value: "3", label: "Thỉnh thoảng" },
      { value: "2", label: "Phần lớn thời gian" },
      { value: "1", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 12,
    question: "Tôi thấy dễ dàng làm những việc tôi từng làm.",
    category: "depression",
    options: [
      { value: "4", label: "Một chút thời gian" },
      { value: "3", label: "Thỉnh thoảng" },
      { value: "2", label: "Phần lớn thời gian" },
      { value: "1", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 13,
    question: "Tôi bồn chồn và không thể ngồi yên.",
    category: "depression",
    options: [
      { value: "1", label: "Một chút thời gian" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Phần lớn thời gian" },
      { value: "4", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 14,
    question: "Tôi cảm thấy hy vọng về tương lai.",
    category: "depression",
    options: [
      { value: "4", label: "Một chút thời gian" },
      { value: "3", label: "Thỉnh thoảng" },
      { value: "2", label: "Phần lớn thời gian" },
      { value: "1", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 15,
    question: "Tôi dễ cáu kỉnh hơn bình thường.",
    category: "depression",
    options: [
      { value: "1", label: "Một chút thời gian" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Phần lớn thời gian" },
      { value: "4", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 16,
    question: "Tôi thấy dễ dàng đưa ra quyết định.",
    category: "depression",
    options: [
      { value: "4", label: "Một chút thời gian" },
      { value: "3", label: "Thỉnh thoảng" },
      { value: "2", label: "Phần lớn thời gian" },
      { value: "1", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 17,
    question: "Tôi cảm thấy mình có ích và cần thiết.",
    category: "depression",
    options: [
      { value: "4", label: "Một chút thời gian" },
      { value: "3", label: "Thỉnh thoảng" },
      { value: "2", label: "Phần lớn thời gian" },
      { value: "1", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 18,
    question: "Cuộc sống của tôi khá trọn vẹn.",
    category: "depression",
    options: [
      { value: "4", label: "Một chút thời gian" },
      { value: "3", label: "Thỉnh thoảng" },
      { value: "2", label: "Phần lớn thời gian" },
      { value: "1", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 19,
    question: "Tôi cảm thấy người khác sẽ tốt hơn nếu tôi chết đi.",
    category: "depression",
    options: [
      { value: "1", label: "Một chút thời gian" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Phần lớn thời gian" },
      { value: "4", label: "Hầu hết thời gian" },
    ],
  },
  {
    id: 20,
    question: "Tôi vẫn thích thú với những việc tôi từng làm.",
    category: "depression",
    options: [
      { value: "4", label: "Một chút thời gian" },
      { value: "3", label: "Thỉnh thoảng" },
      { value: "2", label: "Phần lớn thời gian" },
      { value: "1", label: "Hầu hết thời gian" },
    ],
  },
];

// 5. Thang Đánh Giá Trầm Cảm Hamilton (HAM-D)
// Note: HAM-D is clinician-rated. This is a self-report adaptation for screening.
export const hamdQuestions: Question[] = [
  {
    id: 1,
    question: "Khí sắc trầm (Buồn bã, bi quan, tuyệt vọng)",
    category: "depression",
    options: [
      { value: "0", label: "Không có" },
      { value: "1", label: "Cảm thấy buồn bã chỉ khi được hỏi" },
      { value: "2", label: "Tự phát biểu cảm giác buồn bã" },
      { value: "3", label: "Cảm giác buồn bã không lời" },
      { value: "4", label: "Buồn bã, tuyệt vọng, cảm giác vô dụng" },
    ],
  },
  {
    id: 2,
    question: "Cảm giác tội lỗi",
    category: "depression",
    options: [
      { value: "0", label: "Không có" },
      { value: "1", label: "Tự trách mình, cảm thấy đã làm người khác thất vọng" },
      { value: "2", label: "Ý tưởng tội lỗi hoặc suy ngẫm về lỗi lầm trong quá khứ" },
      { value: "3", label: "Cảm thấy bệnh tật là một sự trừng phạt" },
      { value: "4", label: "Nghe thấy giọng nói buộc tội hoặc tố cáo" },
    ],
  },
  {
    id: 3,
    question: "Tự sát",
    category: "depression",
    options: [
      { value: "0", label: "Không có" },
      { value: "1", label: "Cảm thấy cuộc sống không đáng sống" },
      { value: "2", label: "Ước gì mình chết đi" },
      { value: "3", label: "Ý tưởng hoặc cử chỉ tự sát" },
      { value: "4", label: "Cố gắng tự sát" },
    ],
  },
  {
    id: 4,
    question: "Mất ngủ đầu giấc",
    category: "depression",
    options: [
      { value: "0", label: "Không khó ngủ" },
      { value: "1", label: "Thỉnh thoảng khó ngủ, ví dụ: hơn 30 phút" },
      { value: "2", label: "Thường xuyên khó ngủ" },
    ],
  },
  {
    id: 5,
    question: "Mất ngủ giữa giấc",
    category: "depression",
    options: [
      { value: "0", label: "Không có" },
      { value: "1", label: "Bồn chồn và khó chịu suốt đêm" },
      { value: "2", label: "Thức giấc trong đêm" },
    ],
  },
  {
    id: 6,
    question: "Mất ngủ cuối giấc",
    category: "depression",
    options: [
      { value: "0", label: "Không có" },
      { value: "1", label: "Thức dậy sớm nhưng ngủ lại được" },
      { value: "2", label: "Không thể ngủ lại được nếu đã thức dậy" },
    ],
  },
  {
    id: 7,
    question: "Công việc và hoạt động",
    category: "depression",
    options: [
      { value: "0", label: "Không khó khăn" },
      { value: "1", label: "Cảm giác mệt mỏi, yếu đuối khi làm việc" },
      { value: "2", label: "Mất hứng thú trong hoạt động" },
      { value: "3", label: "Giảm thời gian hoạt động hoặc năng suất" },
      { value: "4", label: "Ngừng làm việc vì bệnh hiện tại" },
    ],
  },
  {
    id: 8,
    question: "Ức chế (chậm chạp trong suy nghĩ, lời nói và vận động)",
    category: "depression",
    options: [
      { value: "0", label: "Bình thường" },
      { value: "1", label: "Chậm chạp nhẹ trong phỏng vấn" },
      { value: "2", label: "Chậm chạp rõ rệt trong phỏng vấn" },
      { value: "3", label: "Khó phỏng vấn" },
      { value: "4", label: "Hoàn toàn bất động" },
    ],
  },
  {
    id: 9,
    question: "Kích động (bồn chồn, không thể ngồi yên)",
    category: "depression",
    options: [
      { value: "0", label: "Không có" },
      { value: "1", label: "Cảm giác bồn chồn" },
      { value: "2", label: "Vặn vẹo tay, tóc,..." },
      { value: "3", label: "Đi lại, không thể ngồi yên" },
      { value: "4", label: "Vò đầu bứt tai, cắn móng tay,..." },
    ],
  },
  {
    id: 10,
    question: "Lo âu tâm lý",
    category: "depression",
    options: [
      { value: "0", label: "Không có" },
      { value: "1", label: "Căng thẳng và dễ cáu kỉnh" },
      { value: "2", label: "Lo lắng về những vấn đề nhỏ" },
      { value: "3", label: "Thái độ lo lắng thể hiện trên nét mặt và lời nói" },
      { value: "4", label: "Nỗi sợ hãi bộc phát" },
    ],
  },
  {
    id: 11,
    question: "Lo âu cơ thể (tim đập nhanh, khó thở, khô miệng...)",
    category: "depression",
    options: [
      { value: "0", label: "Không có" },
      { value: "1", label: "Nhẹ" },
      { value: "2", label: "Vừa" },
      { value: "3", label: "Nặng" },
      { value: "4", label: "Rất nặng, gây mất khả năng" },
    ],
  },
  {
    id: 12,
    question: "Triệu chứng tiêu hóa (chán ăn, nặng bụng)",
    category: "depression",
    options: [
      { value: "0", label: "Không có" },
      { value: "1", label: "Mất cảm giác ngon miệng nhưng vẫn ăn không cần khuyến khích" },
      { value: "2", label: "Khó ăn nếu không có người khuyến khích" },
    ],
  },
  {
    id: 13,
    question: "Triệu chứng cơ thể toàn thân (mệt mỏi, đau nhức)",
    category: "depression",
    options: [
      { value: "0", label: "Không có" },
      { value: "1", label: "Nặng nề ở chân tay, lưng hoặc đầu" },
      { value: "2", label: "Mệt mỏi, đau nhức rõ rệt" },
    ],
  },
  {
    id: 14,
    question: "Triệu chứng sinh dục (mất ham muốn, rối loạn chức năng)",
    category: "depression",
    options: [
      { value: "0", label: "Không có" },
      { value: "1", label: "Giảm nhẹ" },
      { value: "2", label: "Giảm rõ rệt" },
    ],
  },
  {
    id: 15,
    question: "Nghi bệnh (bận tâm quá mức về sức khỏe cơ thể)",
    category: "depression",
    options: [
      { value: "0", label: "Không có" },
      { value: "1", label: "Tự quan sát cơ thể" },
      { value: "2", label: "Bận tâm về sức khỏe" },
      { value: "3", label: "Than phiền thường xuyên, yêu cầu giúp đỡ" },
      { value: "4", label: "Hoang tưởng nghi bệnh" },
    ],
  },
  {
    id: 16,
    question: "Sụt cân",
    category: "depression",
    options: [
      { value: "0", label: "Không sụt cân" },
      { value: "1", label: "Sụt cân nhẹ" },
      { value: "2", label: "Sụt cân rõ rệt" },
    ],
  },
  {
    id: 17,
    question: "Nhận thức về bệnh",
    category: "depression",
    options: [
      { value: "0", label: "Nhận thức mình bị trầm cảm và cần điều trị" },
      { value: "1", label: "Nhận thức bị bệnh nhưng cho là do nguyên nhân khác" },
      { value: "2", label: "Không nhận thức mình bị bệnh" },
    ],
  },
];

// Domain definitions
export const questionDomains: QuestionDomain[] = [
  {
    id: "bdi",
    title: "Thang Đo Trầm Cảm Beck (BDI)",
    description:
      "Thang đo Trầm cảm Beck (BDI) là một trong những công cụ tự đánh giá phổ biến nhất để đo lường mức độ trầm cảm. Nó bao gồm 21 mục, mỗi mục mô tả một triệu chứng cụ thể của bệnh trầm cảm.",
    questionCount: 21,
    targetAudience: "Người có dấu hiệu trầm cảm.",
    purpose: "Đo lường mức độ nghiêm trọng của trầm cảm.",
    color: "blue",
    bgGradient: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    iconType: "FileText",
  },
  {
    id: "dass21",
    title: "Thang Đo Trầm Cảm - Lo Âu - Stress (DASS-21)",
    description:
      "DASS-21 là một bộ câu hỏi tự báo cáo được thiết kế để đo lường ba trạng thái cảm xúc tiêu cực: trầm cảm, lo âu và căng thẳng. Phiên bản 21 câu hỏi là dạng rút gọn của DASS-42.",
    questionCount: 21,
    targetAudience: "Người có triệu chứng trầm cảm, lo âu, hoặc căng thẳng.",
    purpose: "Phân biệt giữa các trạng thái cảm xúc tiêu cực.",
    color: "purple",
    bgGradient: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    iconType: "Brain",
  },
  {
    id: "phq9",
    title: "Bộ Câu Hỏi Sức Khỏe Bệnh Nhân (PHQ-9)",
    description:
      "PHQ-9 là một công cụ sàng lọc trầm cảm ngắn gọn gồm 9 câu hỏi, được sử dụng rộng rãi để chẩn đoán và theo dõi mức độ trầm cảm trong các cơ sở chăm sóc sức khỏe ban đầu.",
    questionCount: 9,
    targetAudience: "Dân số chung, bệnh nhân chăm sóc sức khỏe ban đầu.",
    purpose: "Sàng lọc và theo dõi trầm cảm.",
    color: "emerald",
    bgGradient: "from-emerald-50 to-emerald-100",
    borderColor: "border-emerald-200",
    iconType: "Heart",
  },
  {
    id: "sds",
    title: "Thang Tự Đánh Giá Trầm Cảm Zung (SDS)",
    description:
      "Thang tự đánh giá trầm cảm Zung (SDS) là một bảng câu hỏi ngắn gọn gồm 20 mục để sàng lọc các triệu chứng trầm cảm. Nó bao gồm cả các câu hỏi xuôi và ngược để đánh giá.",
    questionCount: 20,
    targetAudience: "Người có nghi ngờ về triệu chứng trầm cảm.",
    purpose: "Sàng lọc nhanh các triệu chứng trầm cảm.",
    color: "amber",
    bgGradient: "from-amber-50 to-amber-100",
    borderColor: "border-amber-200",
    iconType: "Target",
  },
  {
    id: "hamd",
    title: "Thang Đánh Giá Trầm Cảm Hamilton (HAM-D)",
    description:
      "Thang đánh giá trầm cảm Hamilton (HAM-D) là một trong những thang đo được sử dụng rộng rãi nhất bởi các nhà lâm sàng để đánh giá mức độ nghiêm trọng của bệnh trầm cảm ở bệnh nhân đã được chẩn đoán. Phiên bản này được điều chỉnh để tự báo cáo.",
    questionCount: 17,
    targetAudience: "Bệnh nhân đã được chẩn đoán trầm cảm.",
    purpose: "Đánh giá mức độ nghiêm trọng và theo dõi hiệu quả điều trị.",
    color: "red",
    bgGradient: "from-red-50 to-red-100",
    borderColor: "border-red-200",
    iconType: "Clock",
  },
];

// Function to get questions for a specific domain
export const getQuestionsForDomain = (domainId: string): Question[] => {
  switch (domainId) {
    case "bdi":
      return bdiQuestions;
    case "phq9":
      return phq9Questions;
    case "dass21":
      return dass21Questions;
    case "sds":
      return zungSdsQuestions;
    case "hamd":
      return hamdQuestions;
    default:
      return [];
  }
};
