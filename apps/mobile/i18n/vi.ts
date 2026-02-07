export const vi = {
  common: {
    continue: 'Tiếp tục',
    error: 'Lỗi',
  },
  onboarding: {
    step1: {
      title: 'Tên bạn là gì?',
      subtitle: 'Để AI hiểu bạn hơn nhé!',
      placeholder: 'Nhập tên của bạn...',
    },
    step2: {
      title: 'Tuổi & Giới tính',
      subtitle: 'Giúp AI tạo gợi ý phù hợp hơn',
      agePlaceholder: 'Tuổi của bạn (VD: 22)',
      genders: {
        male: 'Nam',
        female: 'Nữ',
        other: 'Khác',
      },
    },
    step3: {
      title: 'Tính cách của bạn?',
      subtitle: 'Chọn phong cách phù hợp nhất với bạn',
      creating: 'Đang tạo...',
      start: 'Bắt đầu!',
      errorMessage: 'Không thể tạo tài khoản. Vui lòng thử lại.',
    },
  },
  personalities: {
    playful: { label: 'Vui vẻ', description: 'Hài hước, thích trêu đùa' },
    shy: { label: 'Nhút nhát', description: 'Nhẹ nhàng, ít nói' },
    confident: { label: 'Tự tin', description: 'Mạnh mẽ, chủ động' },
    romantic: { label: 'Lãng mạn', description: 'Ngọt ngào, thể hiện cảm xúc' },
  },
  home: {
    tagline: 'Gợi ý tin nhắn cho crush của bạn',
    permissionTitle: 'Cần quyền',
    permissionMessage: 'Bạn cần cho phép truy cập thư viện ảnh',
    uploadTitle: 'Chụp màn hình chat',
    uploadHint: 'Chọn ảnh chụp màn hình cuộc trò chuyện với crush',
    submitButton: 'Gợi ý cho tôi!',
    disclaimer: 'Ảnh của bạn sẽ được xử lý an toàn và không lưu trữ lâu dài',
    errorMessage: 'Không thể tạo gợi ý. Vui lòng thử lại.',
  },
  result: {
    title: '3 gợi ý cho bạn',
    contextLabel: 'Ngữ cảnh:',
    tryAgain: 'Thử lại với ảnh khác',
    copied: 'Đã copy!',
    copiedMessage: 'Gợi ý đã được copy vào clipboard. Chúc bạn may mắn!',
  },
  tones: {
    playful: 'Hài hước',
    neutral: 'Tự nhiên',
    sweet: 'Ngọt ngào',
  },
  suggestion: {
    tapToCopy: 'Chạm để copy',
  },
  loading: {
    messages: [
      'Đang đọc cuộc trò chuyện...',
      'AI đang suy nghĩ...',
      'Đang tạo gợi ý cho bạn...',
      'Sắp xong rồi...',
      'Chọn từ ngọt ngào nhất...',
      'Đếm ngược 3... 2... 1...',
    ],
    subMessage: 'Thường mất khoảng 2-3 giây',
  },
  setup: {
    title: 'Cách dùng nhanh',
    subtitle: 'Thiết lập để dùng CrushTip nhanh hơn',
    step1Title: 'Bật AssistiveTouch',
    step1Desc: 'Vào Cài đặt > Trợ năng > Cảm ứng > AssistiveTouch > BẬT. Đặt "Chạm một lần" = Chụp ảnh màn hình.',
    step2Title: 'Chụp & Chia sẻ',
    step2Desc: 'Chụp ảnh màn hình cuộc chat > Nhấn vào ảnh xem trước ở góc dưới bên trái > Nhấn nút Chia sẻ > Chọn CrushTip.',
    step3Title: 'Nhận gợi ý',
    step3Desc: 'CrushTip sẽ tự động mở và phân tích ảnh chat, rồi đưa ra gợi ý tin nhắn cho bạn!',
    done: 'Đã hiểu!',
  },
};

export type Dictionary = {
  common: { continue: string; error: string };
  onboarding: {
    step1: { title: string; subtitle: string; placeholder: string };
    step2: {
      title: string;
      subtitle: string;
      agePlaceholder: string;
      genders: { male: string; female: string; other: string };
    };
    step3: {
      title: string;
      subtitle: string;
      creating: string;
      start: string;
      errorMessage: string;
    };
  };
  personalities: Record<string, { label: string; description: string }>;
  home: {
    tagline: string;
    permissionTitle: string;
    permissionMessage: string;
    uploadTitle: string;
    uploadHint: string;
    submitButton: string;
    disclaimer: string;
    errorMessage: string;
  };
  result: {
    title: string;
    contextLabel: string;
    tryAgain: string;
    copied: string;
    copiedMessage: string;
  };
  tones: { playful: string; neutral: string; sweet: string };
  suggestion: { tapToCopy: string };
  loading: { messages: string[]; subMessage: string };
  setup: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    done: string;
  };
};
