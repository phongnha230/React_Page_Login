# 🔐 Login Page - React + Vite + ShadCN UI

Một trang đăng nhập/đăng ký hiện đại được xây dựng với React, Vite, ShadCN UI và Tailwind CSS.

![Login Page Preview](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Tính năng

- ✅ Giao diện đăng ký/đăng nhập hiện đại và responsive
- ✅ Tích hợp ShadCN UI components (Button, Input, Card, Label)
- ✅ Đăng nhập với Google (UI ready)
- ✅ Form validation với các trường: Full name, Email, Password
- ✅ Thiết kế clean và professional
- ✅ Dark mode support (thông qua Tailwind CSS)
- ✅ Animation mượt mà với tailwindcss-animate

## 🎨 Demo

Trang đăng ký bao gồm:
- Nút đăng nhập với Google
- Form đăng ký với email
- Các trường: Full name, Email Address, Password
- Link chuyển đến trang Login
- Terms of Service và Privacy Policy

## 🛠️ Công nghệ sử dụng

- **React 19.2.0** - Thư viện UI
- **Vite 7.2.4** - Build tool và dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **ShadCN UI** - Component library
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **React Icons** - Icon library (Google icon)

## 📦 Cài đặt

### Yêu cầu

- Node.js >= 18.0.0
- npm hoặc yarn

### Các bước cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd Login_Ex-main
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở trình duyệt tại `http://localhost:5173`

## 📁 Cấu trúc thư mục

```
Login_Ex-main/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   └── ui/         # ShadCN UI components
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── input.jsx
│   │       └── label.jsx
│   ├── lib/            # Utility functions
│   ├── page/           # Page components
│   │   └── loginPage.jsx
│   ├── App.jsx         # Main App component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── components.json     # ShadCN UI config
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies
```

## 🎯 Scripts

```bash
# Chạy development server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎨 ShadCN UI Components

Dự án sử dụng các components từ ShadCN UI:

- **Button** - Nút bấm với nhiều variants
- **Input** - Input field với styling nhất quán
- **Card** - Container component cho nội dung
- **Label** - Label cho form fields

### Thêm components mới

```bash
npx shadcn@latest add [component-name]
```

## 🔧 Cấu hình

### Tailwind CSS

File `tailwind.config.js` đã được cấu hình với:
- Custom colors và themes
- Animations
- Border radius
- Typography

### Vite

File `vite.config.js` bao gồm:
- React plugin
- Path aliases (`@/` -> `src/`)
- Build optimization

## 🎨 Customization

### Thay đổi màu sắc

Chỉnh sửa file `index.css` để thay đổi color scheme:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... các biến khác */
}
```

### Thêm trang mới

1. Tạo file mới trong `src/page/`
2. Import và sử dụng ShadCN UI components
3. Update routing trong `App.jsx`

## 📝 Tính năng sắp tới

- [ ] Tích hợp backend API
- [ ] Form validation với React Hook Form
- [ ] Xác thực Google OAuth thực tế
- [ ] Trang Login riêng biệt
- [ ] Forgot Password functionality
- [ ] Email verification
- [ ] Protected routes

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phân phối dưới giấy phép MIT.

## 👨‍💻 Tác giả

Phong Nhã - [GitHub Profile](https://github.com/phongnha230)

## 🙏 Cảm ơn

- [ShadCN UI](https://ui.shadcn.com/) - Component library tuyệt vời
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool nhanh chóng
- [React](https://react.dev/) - UI library

---

⭐ Nếu bạn thấy dự án này hữu ích, hãy cho nó một star nhé!
