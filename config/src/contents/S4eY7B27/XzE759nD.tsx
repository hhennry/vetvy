import { ArrowSquareOut, Briefcase, GithubLogo, MapPin } from "phosphor-react";
import React from "react";

export function X5y36() {
  return (
    <div className="w-full absolute top-40 left-0 px-2">
      <section className="_4876ESXl">
        <img
          className="w-full max-w-xs min-wid-16 m-auto rounded-lg sm:w-56 sm:mx-0 md:h-fit"
          src="./config/public/image/me.jpg"
          alt="Foto de Henry Rodrigues"
          loading="lazy"
        />
        <span className="_4xKv1jw3 grid gap-4 m-auto max-w-xs min-wid-16 sm:m-0 sm:my-5 sm:h-fit sm:max-w-sm md:my-0 md:max-w-max relative">
          <div className="grid gap-3 sm:gap-4 h-fit">
            <span className="grid text-center sm:flex sm:justify-between sm:text-center h-fit">
              <h2 className="_hrx8E0I8 text-center sx:text-xl">
                Henry Rodrigues
              </h2>
              <a title="GitHub de @hhennryy" href="https://github.com/hhennryy/" target="_blank" rel="no-referrer" className="_mw4j9OK5 flex justify-center items-center gap-1">
                <p>Github</p>
                <ArrowSquareOut weight="bold" />
              </a>
            </span>
            <p className="_7O7a88Vj text-justify text-sm sm:text-base">
              Desenvolvedor front-end que ama ReactJS, TailwindCSS e TypeScript.
            </p>
          </div>
          <div className="_676dosVc md:h-fit md:absolute md:bottom-0">
            <span className="_7O7a88Vj">
              <GithubLogo className="_Y1rrP236 text-lg" />
              <p>hhennryy</p>
            </span>
            <span className="_7O7a88Vj">
              <Briefcase className="_Y1rrP236 text-lg" />
              <p title="Setor de cerimonial da Camara Municipal de Porto Alegre">
                Cerimonial - CMPA
              </p>
            </span>
            <span className="_7O7a88Vj">
              <MapPin className="_Y1rrP236 text-lg" />
              <p>Alvorada - RS</p>
            </span>
          </div>
        </span>
      </section>
    </div>
  );
}
