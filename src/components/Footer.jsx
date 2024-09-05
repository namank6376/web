import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 text-center border-t py-10 border-neutral-700 items-center">
      <div className="container mx-auto px-4 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4 items-center">Resources</h3>
            <ul className="flex flex-col items-start space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-neutral-300 hover:text-white" href={link.href}>
                    {link.text}
                  </a>  
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="flex flex-col items-start space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-neutral-300 hover:text-white" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="flex flex-col items-start space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-neutral-300 hover:text-white" href={link.href}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
