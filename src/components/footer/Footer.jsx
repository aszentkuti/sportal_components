import React from "react";

function Footer({ footerData: { logos, copyrightText, links } }) {
  return (
    <footer className="bg-slate-100 pt-8">
      <div className="flex flex-col gap-8 max-w-content mx-auto mb-8 px-5">
        <div className="flex gap-5 place-content-between flex-wrap justify-center">
          {logos &&
            logos.map((logo) => (
              <a href={logo.url}>
                <img src={logo.image} alt={logo.alt} />
              </a>
            ))}
        </div>
        <div>
          <p className="text-center text-sm text-slate-500">{copyrightText}</p>
        </div>
      </div>
      <div className="bg-slate-200 py-4 flex px-5">
        <div className="max-w-content w-full mx-auto flex place-content-around items-center flex-wrap gap-x-4 gap-y-2">
          {links && links.map((link) => <a className="hover:text-brand-red transition-colors" href={link.url}>{link.text}</a>)}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
