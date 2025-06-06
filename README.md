# NotePro 📝

A modern, responsive web application for creating, managing, and organizing your notes with a clean and intuitive interface.

![NotePro Banner](https://img.shields.io/badge/NotePro-Notes%20App-indigo?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMTEgNEg0YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0ydi03Ii8+PHBhdGggZD0iTTE4LjUgMi41YTIuMTIxIDIuMTIxIDAgMCAxIDMgM0wxMiAxNWwtNCAxIDEtNCA5LjUtOS41eiIvPjwvc3ZnPg==)

## ✨ Features

- **Create Notes**: Add new notes with titles and content
- **View Notes**: Browse all your notes in a responsive grid layout
- **Delete Notes**: Remove notes you no longer need
- **Real-time Validation**: Character limits and input validation
- **Toast Notifications**: Success/error feedback for user actions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Input Validation**: Prevents special characters in titles and enforces character limits

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd notepro
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create the files directory**

   ```bash
   mkdir files
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📋 Usage

### Creating a Note

1. Enter a title (max 30 characters, no special characters)
2. Write your note content (max 500 characters)
3. Click "Save Note" to create your note

### Managing Notes

- **View**: All notes are displayed in a grid layout on the homepage
- **Read More/Less**: Click the toggle button to expand or collapse note content
- **Delete**: Click the trash icon in the top-right corner of any note card

### Input Validation

- **Title**: Must be 30 characters or less, no special characters allowed
- **Content**: Must be 500 characters or less
- Real-time character counters show current usage
- Form submission is disabled when limits are exceeded

## 🛠️ Technology Stack

### Backend

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **EJS**: Embedded JavaScript templating engine
- **File System (fs)**: For note storage and management

### Frontend

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Interactive functionality
- **Toastify.js**: Toast notification library

### Styling & UI

- **Inter Font**: Modern, clean typography
- **Custom CSS**: Smooth animations and transitions
- **Responsive Design**: Mobile-first approach
- **Gradient Backgrounds**: Modern visual appeal

## 📁 Project Structure

```
notepro/
├── index.js              # Main server file
├── package.json          # Project dependencies
├── files/               # Directory for storing note files
├── views/               # EJS templates
│   ├── index.ejs        # Main page template
│   └── error.ejs        # Error page template
├── public/              # Static assets
└── node_modules/        # Dependencies
    └── toastify-js/     # Toast notification library
```

## 🔧 API Endpoints

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/` | Display all notes | - |
| POST | `/create` | Create a new note | `title`, `content` |
| POST | `/delete` | Delete a note | `title` |

## ⚙️ Configuration

### Environment Variables

The application runs on port 3000 by default. You can modify this in `index.js`:

```javascript
const port = process.env.PORT || 3000;
```

### File Storage

Notes are stored as `.txt` files in the `./files` directory. Each note's filename is the title with spaces removed and a `.txt` extension.

### Character Limits

- **Title**: 30 characters maximum
- **Content**: 500 characters maximum

These limits can be adjusted in both the frontend JavaScript and backend validation.

## 🚫 Input Restrictions

- **Special Characters**: Not allowed in note titles (regex: `/[^a-zA-Z0-9]/`)
- **File Names**: Spaces in titles are automatically removed for file storage
- **Character Limits**: Enforced on both client and server side

## 🎨 Customization

### Styling

The application uses Tailwind CSS for styling. Key design elements include:

- **Primary Color**: Indigo (#6366f1)
- **Font**: Inter from Google Fonts
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design approach

### Modifying Limits

To change character limits:

1. **Frontend**: Update the HTML and JavaScript in `index.ejs`
2. **Backend**: Adjust validation in `index.js`

## 🔒 Error Handling

The application includes comprehensive error handling:

- **File System Errors**: Graceful handling of read/write failures
- **Validation Errors**: User-friendly error messages
- **Special Character Detection**: Prevents invalid filenames
- **Custom Error Page**: Professional error display with navigation

## 📱 Responsive Design

NotePro is designed to work seamlessly across devices:

- **Desktop**: Full grid layout with hover effects
- **Tablet**: Responsive grid that adapts to screen size
- **Mobile**: Single column layout with touch-friendly buttons

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- Notes are stored as plain text files (not suitable for production without database)
- No user authentication (all notes are public on the server)
- Limited to single-server deployment (no horizontal scaling)

## 🔮 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication and authorization
- [ ] Note categories and tags
- [ ] Search functionality
- [ ] Rich text editor
- [ ] Export notes (PDF, markdown)
- [ ] Note sharing capabilities
- [ ] Dark mode support

## 📞 Support

If you encounter any issues or have questions, please:

1. Check the existing issues in the repository
2. Create a new issue with detailed description
3. Include steps to reproduce any bugs

---

**Built with ❤️ using Node.js and Express**

*NotePro - Capture your thoughts and ideas with style*
