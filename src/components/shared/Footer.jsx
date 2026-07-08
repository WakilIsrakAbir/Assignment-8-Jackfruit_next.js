const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-auto">
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <aside className="flex flex-col gap-2">
          <p className="text-3xl font-bold mb-2">SunCart</p>
          <p className="text-base-content/70">Providing reliable summer essentials since 2024.<br/>Your perfect summer starts here.</p>
        </aside>
        <nav className="flex flex-col gap-2">
          <h6 className="font-bold uppercase mb-2">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="font-bold uppercase mb-2">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="font-bold uppercase mb-2">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
