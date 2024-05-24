function Footer({ ...props }) {
  return (
    <footer
      className="flex flex-row justify-center px-4 py-3 border-b items-center"
      {...props}
    >
      <div>
        <p>© 2024 Jasper Lefever</p>
      </div>
    </footer>
  );
}

export default Footer;
