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

// DASS-21 Questions
export const dass21Questions: Question[] = [
  {
    id: 1,
    question: "Tôi cảm thấy khó thư giãn",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 2,
    question: "Tôi nhận thấy miệng mình bị khô",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 3,
    question: "Tôi không thể cảm thấy bất kỳ cảm xúc tích cực nào",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 4,
    question:
      "Tôi cảm thấy khó thở (ví dụ: thở gấp hoặc hụt hơi dù không vận động)",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 5,
    question: "Tôi cảm thấy khó có động lực để làm việc gì đó",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 6,
    question: "Tôi có xu hướng phản ứng quá mức với tình huống",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 7,
    question: "Tôi cảm thấy run rẩy (ví dụ: run tay)",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 8,
    question: "Tôi cảm thấy mình đang tiêu tốn rất nhiều năng lượng vì lo lắng",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 9,
    question:
      "Tôi lo lắng về các tình huống có thể khiến tôi hoảng loạn và xấu hổ",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 10,
    question: "Tôi cảm thấy không còn điều gì đáng mong đợi trong cuộc sống",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 11,
    question: "Tôi thường xuyên cảm thấy bồn chồn, kích động",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 12,
    question: "Tôi cảm thấy khó thư giãn",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 13,
    question: "Tôi cảm thấy buồn bã và u sầu",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 14,
    question: "Tôi cảm thấy khó chịu khi bị ngăn cản làm điều mình đang làm",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 15,
    question: "Tôi cảm thấy gần như hoảng loạn",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 16,
    question: "Tôi không thể hứng thú với bất kỳ điều gì",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 17,
    question: "Tôi cảm thấy bản thân không có giá trị",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 18,
    question: "Tôi cảm thấy nhạy cảm và dễ bị kích động",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 19,
    question:
      "Tôi cảm nhận được tim mình đập nhanh hoặc bỏ nhịp dù không vận động",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 20,
    question: "Tôi cảm thấy sợ hãi mà không rõ lý do",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 21,
    question: "Tôi cảm thấy cuộc sống vô nghĩa",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
];

// PHQ-9 Questions
export const phq9Questions: Question[] = [
  {
    id: 1,
    question: "Ít hứng thú hoặc không còn vui thích khi làm mọi việc",
    category: "depression",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 2,
    question: "Cảm thấy buồn bã, chán nản hoặc tuyệt vọng",
    category: "depression",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 3,
    question: "Khó ngủ, ngủ không sâu giấc hoặc ngủ quá nhiều",
    category: "depression",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 4,
    question: "Cảm thấy mệt mỏi hoặc thiếu năng lượng",
    category: "depression",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 5,
    question: "Ăn ít hoặc ăn quá nhiều",
    category: "depression",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 6,
    question:
      "Cảm thấy tệ về bản thân - hoặc cảm thấy mình là kẻ thất bại hoặc đã làm tổn thương gia đình",
    category: "depression",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 7,
    question: "Khó tập trung vào việc gì đó, chẳng hạn như đọc báo hoặc xem TV",
    category: "depression",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 8,
    question:
      "Di chuyển hoặc nói chuyện chậm đến mức người khác có thể nhận ra hoặc ngược lại - bồn chồn không yên",
    category: "depression",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 9,
    question:
      "Nghĩ rằng tốt hơn là chết đi hoặc tự làm tổn thương bản thân theo cách nào đó",
    category: "depression",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
];

// GAD-7 Questions
export const gad7Questions: Question[] = [
  {
    id: 1,
    question: "Cảm thấy bồn chồn, lo lắng hoặc bất an",
    category: "anxiety",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 2,
    question: "Không thể dừng lại hoặc kiểm soát được những lo lắng",
    category: "anxiety",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 3,
    question: "Lo lắng quá mức về những điều khác nhau",
    category: "anxiety",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 4,
    question: "Khó thư giãn",
    category: "anxiety",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 5,
    question: "Bồn chồn đến mức khó ngồi yên",
    category: "anxiety",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 6,
    question: "Dễ bực bội hoặc cáu kỉnh",
    category: "anxiety",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
  {
    id: 7,
    question: "Cảm thấy sợ hãi như thể điều gì đó khủng khiếp có thể xảy ra",
    category: "anxiety",
    options: [
      { value: "0", label: "Hoàn toàn không" },
      { value: "1", label: "Vài ngày" },
      { value: "2", label: "Hơn một nửa số ngày" },
      { value: "3", label: "Gần như mỗi ngày" },
    ],
  },
];

// PSS-10 Questions
export const pss10Questions: Question[] = [
  {
    id: 1,
    question:
      "Trong tháng qua, bạn có thường xuyên cảm thấy khó chịu vì điều gì đó xảy ra bất ngờ không?",
    category: "stress",
    options: [
      { value: "0", label: "Không bao giờ" },
      { value: "1", label: "Gần như không bao giờ" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Khá thường xuyên" },
      { value: "4", label: "Rất thường xuyên" },
    ],
  },
  {
    id: 2,
    question:
      "Trong tháng qua, bạn có thường xuyên cảm thấy không thể kiểm soát những điều quan trọng trong cuộc sống không?",
    category: "stress",
    options: [
      { value: "0", label: "Không bao giờ" },
      { value: "1", label: "Gần như không bao giờ" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Khá thường xuyên" },
      { value: "4", label: "Rất thường xuyên" },
    ],
  },
  {
    id: 3,
    question:
      "Trong tháng qua, bạn có thường xuyên cảm thấy căng thẳng và áp lực không?",
    category: "stress",
    options: [
      { value: "0", label: "Không bao giờ" },
      { value: "1", label: "Gần như không bao giờ" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Khá thường xuyên" },
      { value: "4", label: "Rất thường xuyên" },
    ],
  },
  {
    id: 4,
    question:
      "Trong tháng qua, bạn có thường xuyên cảm thấy tự tin về khả năng xử lý các vấn đề cá nhân không?",
    category: "stress",
    options: [
      { value: "4", label: "Không bao giờ" },
      { value: "3", label: "Gần như không bao giờ" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "1", label: "Khá thường xuyên" },
      { value: "0", label: "Rất thường xuyên" },
    ],
  },
  {
    id: 5,
    question:
      "Trong tháng qua, bạn có thường xuyên cảm thấy mọi thứ diễn ra như ý muốn không?",
    category: "stress",
    options: [
      { value: "4", label: "Không bao giờ" },
      { value: "3", label: "Gần như không bao giờ" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "1", label: "Khá thường xuyên" },
      { value: "0", label: "Rất thường xuyên" },
    ],
  },
  {
    id: 6,
    question:
      "Trong tháng qua, bạn có thường xuyên thấy không thể đối phó với tất cả những việc cần làm không?",
    category: "stress",
    options: [
      { value: "0", label: "Không bao giờ" },
      { value: "1", label: "Gần như không bao giờ" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Khá thường xuyên" },
      { value: "4", label: "Rất thường xuyên" },
    ],
  },
  {
    id: 7,
    question:
      "Trong tháng qua, bạn có thường xuyên có thể kiểm soát sự khó chịu trong cuộc sống không?",
    category: "stress",
    options: [
      { value: "4", label: "Không bao giờ" },
      { value: "3", label: "Gần như không bao giờ" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "1", label: "Khá thường xuyên" },
      { value: "0", label: "Rất thường xuyên" },
    ],
  },
  {
    id: 8,
    question:
      "Trong tháng qua, bạn có thường xuyên cảm thấy mình đang vượt qua được khó khăn không?",
    category: "stress",
    options: [
      { value: "4", label: "Không bao giờ" },
      { value: "3", label: "Gần như không bao giờ" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "1", label: "Khá thường xuyên" },
      { value: "0", label: "Rất thường xuyên" },
    ],
  },
  {
    id: 9,
    question:
      "Trong tháng qua, bạn có thường xuyên cảm thấy tức giận vì những việc ngoài tầm kiểm soát không?",
    category: "stress",
    options: [
      { value: "0", label: "Không bao giờ" },
      { value: "1", label: "Gần như không bao giờ" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Khá thường xuyên" },
      { value: "4", label: "Rất thường xuyên" },
    ],
  },
  {
    id: 10,
    question:
      "Trong tháng qua, bạn có thường xuyên cảm thấy khó khăn đang chồng chất đến mức không thể vượt qua không?",
    category: "stress",
    options: [
      { value: "0", label: "Không bao giờ" },
      { value: "1", label: "Gần như không bao giờ" },
      { value: "2", label: "Thỉnh thoảng" },
      { value: "3", label: "Khá thường xuyên" },
      { value: "4", label: "Rất thường xuyên" },
    ],
  },
];

// Domain definitions
export const questionDomains: QuestionDomain[] = [
  {
    id: "dass21",
    title: "Bài Test Lo âu – Trầm cảm – Stress (DASS 21)",
    description:
      "Bài test DASS 21 (Depression Anxiety Stress Scale) là một công cụ đánh giá chuyên sâu về mức độ trầm cảm, lo âu và căng thẳng. Đối tượng nên làm bài test DASS 21 là những người có dấu hiệu của trầm cảm, lo âu và căng thẳng, đặc biệt là những người đang trải qua những tình huống căng thẳng trong cuộc sống như công việc áp lực, gia đình, hay các sự kiện khủng hoảng.",
    questionCount: 21,
    targetAudience: "Người có triệu chứng lo âu, trầm cảm và căng thẳng.",
    purpose: "Đánh giá và đề xuất phương pháp điều trị thích hợp.",
    color: "blue",
    bgGradient: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    iconType: "FileText",
  },
  {
    id: "dass42",
    title: "Bài Test Lo âu – Trầm cảm – Stress (DASS 42)",
    description:
      "Bài test DASS 42 là một công cụ đánh giá quan trọng để đo lường mức độ rối loạn lo âu, trầm cảm và căng thẳng. Được xây dựng dựa trên nghiên cứu khoa học, bài test này được công nhận về tính chính xác và độ tin cậy trong việc đánh giá tình trạng tâm lý của cá nhân. Đối tượng nên làm bài test DASS 42 bao gồm những người có dấu hiệu của rối loạn...",
    questionCount: 42,
    targetAudience: "Người có triệu chứng lo âu, trầm cảm và căng thẳng.",
    purpose: "Đánh giá và đề xuất phương pháp điều trị thích hợp.",
    color: "purple",
    bgGradient: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    iconType: "Brain",
  },
  {
    id: "phq9",
    title: "Bài Test Trầm cảm (PHQ-9)",
    description:
      "Bài test PHQ-9 (Patient Health Questionnaire-9) là công cụ sàng lọc và đánh giá mức độ nghiêm trọng của các triệu chứng trầm cảm. Được sử dụng rộng rãi trong lâm sàng và nghiên cứu, PHQ-9 giúp xác định các dấu hiệu trầm cảm và theo dõi tiến triển điều trị.",
    questionCount: 9,
    targetAudience: "Người có dấu hiệu trầm cảm, mất hứng thú với cuộc sống.",
    purpose: "Sàng lọc và đánh giá mức độ trầm cảm.",
    color: "emerald",
    bgGradient: "from-emerald-50 to-emerald-100",
    borderColor: "border-emerald-200",
    iconType: "Heart",
  },
  {
    id: "gad7",
    title: "Bài Test Lo âu (GAD-7)",
    description:
      "Bài test GAD-7 (Generalized Anxiety Disorder-7) là công cụ đánh giá các triệu chứng lo âu tổng quát. Đây là một trong những thang đo được sử dụng phổ biến nhất để sàng lọc và đánh giá mức độ nghiêm trọng của rối loạn lo âu tổng quát trong thực hành lâm sàng.",
    questionCount: 7,
    targetAudience: "Người có triệu chứng lo âu, bồn chồn, khó kiểm soát.",
    purpose: "Đánh giá mức độ lo âu và rối loạn lo âu tổng quát.",
    color: "amber",
    bgGradient: "from-amber-50 to-amber-100",
    borderColor: "border-amber-200",
    iconType: "Target",
  },
  {
    id: "pss10",
    title: "Bài Test Căng thẳng (PSS-10)",
    description:
      "Bài test PSS-10 (Perceived Stress Scale-10) đo lường mức độ căng thẳng mà cá nhân cảm nhận được trong cuộc sống. Thang đo này đánh giá cảm giác về tính không thể dự đoán, không kiểm soát được và quá tải trong cuộc sống của một tháng qua.",
    questionCount: 10,
    targetAudience: "Người cảm thấy căng thẳng, áp lực trong cuộc sống.",
    purpose: "Đánh giá mức độ căng thẳng cảm nhận được.",
    color: "red",
    bgGradient: "from-red-50 to-red-100",
    borderColor: "border-red-200",
    iconType: "Clock",
  },
];

// Function to get questions for a specific domain
export const getQuestionsForDomain = (domainId: string): Question[] => {
  switch (domainId) {
    case "dass21":
      return dass21Questions;
    case "dass42":
      return dass21Questions; // For now, using DASS-21 questions. You can create DASS-42 later
    case "phq9":
      return phq9Questions;
    case "gad7":
      return gad7Questions;
    case "pss10":
      return pss10Questions;
    default:
      return dass21Questions;
  }
};
