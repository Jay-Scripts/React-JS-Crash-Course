const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">
          &copy; 2026 Cornelio Gatbonton. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:email@example.com"
            className="hover:text-yellow-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
