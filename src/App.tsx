import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const dogHero =
  "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=90";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1629740067905-bd3f515aa739?auto=format&fit=crop&w=900&q=85",
    alt: "Cachorro pequeno e peludo",
    label: "Banho & carinho",
    className: "md:col-span-5 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1647806422508-0322f33e270b?auto=format&fit=crop&w=900&q=85",
    alt: "Gato em fundo amarelo",
    label: "Dia de beleza",
    className: "md:col-span-3",
  },
  {
    src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=900&q=85",
    alt: "Cachorro preto usando coleira azul",
    label: "Novo visual",
    className: "md:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1536589961747-e239b2abbec2?auto=format&fit=crop&w=900&q=85",
    alt: "Gato branco e marrom",
    label: "Momento zen",
    className: "md:col-span-3",
  },
  {
    src: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=900&q=85",
    alt: "Pug usando roupa listrada",
    label: "Pet fashion",
    className: "md:col-span-4",
  },
];

const services = [
  {
    icon: <ScissorsIcon />,
    number: "01",
    title: "Banho & Tosa",
    text: "Cuidado gentil, produtos naturais e um look cheio de personalidade.",
    color: "bg-[#ff6b51]",
  },
  {
    icon: <HeartIcon />,
    number: "02",
    title: "Bem-estar",
    text: "Hidratação, escovação e atenção individual para cada tipo de pelagem.",
    color: "bg-[#f4d35e]",
  },
  {
    icon: <BagIcon />,
    number: "03",
    title: "Pet boutique",
    text: "Acessórios, snacks e escolhas conscientes para uma rotina mais feliz.",
    color: "bg-[#b9dc5b]",
  },
];

function PawMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="inline-flex items-center gap-2.5" aria-label="Mimo Pet - início">
      <span
        className={`grid place-items-center rounded-full bg-[#173f35] text-[#f6f2e8] ${compact ? "h-8 w-8" : "h-10 w-10"}`}
      >
        <PawIcon />
      </span>
      <span
        className={`font-display font-black tracking-[-0.05em] text-[#173f35] ${compact ? "text-lg" : "text-2xl"}`}
      >
        mimo<span className="text-[#ff6b51]">pet</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-[#173f35]/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <PawMark />
        <nav
          className="flex items-center gap-1 rounded-full border border-[#173f35]/10 bg-white/60 p-1.5 backdrop-blur-md"
          aria-label="Menu principal"
        >
          {[
            ["Home", "#home"],
            ["Galeria", "#galeria"],
            ["Contatos", "#contatos"],
          ].map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={`rounded-full px-3 py-2 text-xs font-bold transition sm:px-5 sm:text-sm ${
                index === 0 ? "bg-[#173f35] text-white" : "text-[#173f35] hover:bg-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f6f2e8] pt-20">
      <div className="absolute left-[-5rem] top-36 h-48 w-48 rounded-full border-[28px] border-[#f4d35e]/60" />
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-12">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex rotate-[-2deg] items-center gap-2 rounded-full bg-[#b9dc5b] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#173f35]">
            <SparkIcon /> Pet care com afeto
          </div>
          <h1 className="font-display text-[clamp(3.7rem,8vw,7.5rem)] font-black leading-[0.82] tracking-[-0.075em] text-[#173f35]">
            Mais mimo.
            <br />
            Mais <span className="relative inline-block text-[#ff6b51]">au</span>mor.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#365b52]">
            Uma experiência leve, segura e cheia de carinho para deixar seu melhor amigo ainda mais
            feliz.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contatos"
              className="group inline-flex items-center gap-3 rounded-full bg-[#173f35] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#235b4d]"
            >
              Agendar um mimo
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#ff6b51] transition group-hover:rotate-45">
                <ArrowIcon />
              </span>
            </a>
            <a
              href="#galeria"
              className="border-b-2 border-[#173f35] pb-1 text-sm font-black text-[#173f35]"
            >
              Conheça nosso espaço
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {gallery.slice(1, 4).map((photo) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt=""
                  className="h-11 w-11 rounded-full border-2 border-[#f6f2e8] object-cover"
                />
              ))}
            </div>
            <p className="text-xs font-bold leading-tight text-[#365b52]">
              <strong className="block text-base text-[#173f35]">+800 rabinhos</strong>
              felizes por aqui
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[570px]">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#b9dc5b]" />
          <div className="absolute -left-8 bottom-12 z-10 rotate-[-7deg] rounded-2xl bg-white p-4 shadow-xl shadow-[#173f35]/10">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f4d35e] text-[#173f35]">
                <HeartIcon />
              </span>
              <span className="text-xs font-bold text-[#173f35]">
                Cuidado de verdade
                <br />
                <strong className="text-[#ff6b51]">em cada detalhe.</strong>
              </span>
            </div>
          </div>
          <div className="hero-blob relative h-[520px] overflow-hidden bg-[#f4d35e]">
            <img
              src={dogHero}
              alt="Golden retriever feliz ao ar livre"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173f35]/25 to-transparent" />
          </div>
          <div className="absolute -bottom-7 right-8 z-10 grid h-24 w-24 rotate-12 place-items-center rounded-full bg-[#ff6b51] text-center text-xs font-black uppercase tracking-wider text-white">
            Aqui é<br />
            pet friendly!
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden bg-[#173f35] py-4 text-[#f6f2e8]">
        <div className="marquee flex min-w-max items-center gap-9 whitespace-nowrap text-sm font-black uppercase tracking-[0.16em]">
          {[
            "Banho relaxante",
            "Tosa com estilo",
            "Produtos naturais",
            "Muito carinho",
            "Banho relaxante",
            "Tosa com estilo",
            "Produtos naturais",
            "Muito carinho",
          ].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-9">
              {item}
              <PawIcon />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-[#fffdf8] px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#ff6b51]">
              Nossos cuidados
            </p>
            <h2 className="font-display text-5xl font-black leading-none tracking-[-0.05em] text-[#173f35] md:text-6xl">
              Tudo que faz bem.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#587269]">
            Cada pet tem seu jeitinho. Por isso, nosso atendimento respeita o tempo, as necessidades
            e a personalidade de cada um.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[2rem] border border-[#173f35]/10 bg-[#f6f2e8] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#173f35]/10"
            >
              <div className="mb-16 flex items-start justify-between">
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl text-[#173f35] ${service.color}`}
                >
                  {service.icon}
                </span>
                <span className="font-display text-2xl font-black text-[#173f35]/20">
                  {service.number}
                </span>
              </div>
              <h3 className="font-display text-3xl font-black tracking-[-0.04em] text-[#173f35]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#587269]">{service.text}</p>
              <a
                href="#contatos"
                className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#173f35]"
              >
                Quero conhecer <ArrowIcon dark />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<
    (typeof gallery)[number] | null
  >(null);

  return (
    <section
      id="galeria"
      className="bg-[#173f35] px-5 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#b9dc5b]">
              Galeria de fofura
            </p>

            <h2 className="font-display max-w-xl text-5xl font-black leading-none tracking-[-0.05em] text-white md:text-6xl">
              Quem passa por aqui, sai brilhando.
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Momentos reais dos nossos clientes de quatro patas.
          </p>
        </div>

        <div className="grid auto-rows-[260px] gap-4 md:grid-cols-12">
          {gallery.map((photo, index) => (
            <figure
              key={photo.src}
              className={`group relative overflow-hidden rounded-[1.75rem] ${photo.className}`}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                aria-label={`Ampliar imagem: ${photo.alt}`}
                aria-haspopup="dialog"
                className="relative block h-full w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#b9dc5b]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <figcaption className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-[#173f35] backdrop-blur">
                  <span
                    className={
                      index % 2
                        ? "text-[#ff6b51]"
                        : "text-[#173f35]"
                    }
                  >
                    <PawIcon />
                  </span>
                  {photo.label}
                </figcaption>
              </button>
            </figure>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <GalleryLightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
}


type GalleryPhoto = (typeof gallery)[number];

function GalleryLightbox({
  photo,
  onClose,
}: {
  photo: GalleryPhoto;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        // O único controle dentro do diálogo é o botão fechar.
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Imagem ampliada: ${photo.alt}`}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-10"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative flex max-h-full max-w-6xl flex-col items-center">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar imagem ampliada"
          title="Fechar"
          className="absolute -right-2 -top-12 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#173f35] transition hover:bg-[#b9dc5b] focus-visible:outline-4 focus-visible:outline-[#ff6b51] md:-right-12 md:top-0"
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            ×
          </span>
        </button>

        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl"
        />

        <p className="mt-4 text-center text-sm font-bold text-white">
          {photo.label}
        </p>
      </div>
    </div>,
    document.body
  );
}


function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contatos" className="bg-[#ff6b51] px-5 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#f6f2e8] lg:grid-cols-[.9fr_1.1fr]">
        <div className="flex flex-col justify-between p-8 md:p-12">
          <div>
            <span className="inline-block rounded-full bg-[#f4d35e] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#173f35]">
              Vamos conversar?
            </span>
            <h2 className="mt-7 font-display text-5xl font-black leading-[0.95] tracking-[-0.055em] text-[#173f35] md:text-6xl">
              Seu pet merece esse carinho.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-[#587269]">
              Conte pra gente sobre seu melhor amigo e vamos preparar o cuidado perfeito.
            </p>
          </div>
          <div className="mt-12 grid gap-5 text-sm text-[#173f35] sm:grid-cols-2">
            <div>
              <strong className="mb-1 block text-xs uppercase tracking-widest text-[#ff6b51]">
                WhatsApp
              </strong>
              (11) 99999-1234
            </div>
            <div>
              <strong className="mb-1 block text-xs uppercase tracking-widest text-[#ff6b51]">
                Endereço
              </strong>
              Rua dos Bichinhos, 123
            </div>
          </div>
        </div>
        <form
          className="m-3 rounded-[2rem] bg-white p-7 md:p-10"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs font-black uppercase tracking-wider text-[#173f35]">
              Seu nome
              <input
                required
                className="mt-2 w-full rounded-2xl border border-[#173f35]/15 bg-[#f6f2e8] px-4 py-3 text-sm font-medium normal-case outline-none transition focus:border-[#ff6b51]"
                placeholder="Como podemos chamar você?"
              />
            </label>
            <label className="text-xs font-black uppercase tracking-wider text-[#173f35]">
              Nome do pet
              <input
                required
                className="mt-2 w-full rounded-2xl border border-[#173f35]/15 bg-[#f6f2e8] px-4 py-3 text-sm font-medium normal-case outline-none transition focus:border-[#ff6b51]"
                placeholder="Nome do seu melhor amigo"
              />
            </label>
          </div>
          <label className="mt-5 block text-xs font-black uppercase tracking-wider text-[#173f35]">
            WhatsApp
            <input
              required
              type="tel"
              className="mt-2 w-full rounded-2xl border border-[#173f35]/15 bg-[#f6f2e8] px-4 py-3 text-sm font-medium normal-case outline-none transition focus:border-[#ff6b51]"
              placeholder="(00) 00000-0000"
            />
          </label>
          <label className="mt-5 block text-xs font-black uppercase tracking-wider text-[#173f35]">
            Do que ele precisa?
            <textarea
              className="mt-2 min-h-28 w-full resize-none rounded-2xl border border-[#173f35]/15 bg-[#f6f2e8] px-4 py-3 text-sm font-medium normal-case outline-none transition focus:border-[#ff6b51]"
              placeholder="Conte um pouquinho pra gente..."
            />
          </label>
          <button
            type="submit"
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-[#173f35] px-6 py-4 font-bold text-white transition hover:bg-[#235b4d]"
          >
            {sent ? "Mensagem enviada!" : "Enviar mensagem"} <ArrowIcon />
          </button>
        </form>
      </div>
    </section>
  );
}

function MobilePreview() {
  return (
    <section className="overflow-hidden bg-[#e9e4da] px-5 py-24">
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#ff6b51]">
          Experiência responsiva
        </p>
        <h2 className="font-display text-4xl font-black tracking-[-0.05em] text-[#173f35] md:text-5xl">
          Mimo em qualquer tela.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#587269]">
          A mesma energia, adaptada para uma navegação rápida, confortável e intuitiva no celular.
        </p>
      </div>

      <div className="phone-shell mx-auto w-full max-w-[390px] overflow-hidden border-[10px] border-[#173f35] bg-[#f6f2e8] shadow-2xl shadow-[#173f35]/20">
        <div className="flex items-center justify-between px-5 py-4">
          <PawMark compact />
          <nav className="flex gap-1 text-[9px] font-black text-[#173f35]">
            <a href="#home" className="rounded-full bg-[#173f35] px-2.5 py-1.5 text-white">
              Home
            </a>
            <a href="#galeria" className="px-1.5 py-1.5">
              Galeria
            </a>
            <a href="#contatos" className="px-1.5 py-1.5">
              Contatos
            </a>
          </nav>
        </div>
        <div className="px-5 pb-7 pt-8 text-center">
          <span className="rounded-full bg-[#b9dc5b] px-3 py-1.5 text-[8px] font-black uppercase tracking-widest text-[#173f35]">
            Pet care com afeto
          </span>
          <h3 className="mt-5 font-display text-5xl font-black leading-[0.86] tracking-[-0.07em] text-[#173f35]">
            Mais mimo.
            <br />
            Mais <span className="text-[#ff6b51]">aumor.</span>
          </h3>
          <p className="mx-auto mt-4 max-w-[270px] text-xs leading-relaxed text-[#587269]">
            Cuidado leve e cheio de carinho para seu melhor amigo.
          </p>
          <a
            href="#contatos"
            className="mt-5 inline-flex rounded-full bg-[#173f35] px-5 py-3 text-xs font-bold text-white"
          >
            Agendar um mimo
          </a>
          <div className="mt-7 h-72 overflow-hidden rounded-[45%_45%_1.5rem_1.5rem]">
            <img
              src={dogHero}
              alt="Golden retriever feliz"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="bg-[#173f35] px-5 py-7">
          <p className="mb-4 text-[9px] font-black uppercase tracking-widest text-[#b9dc5b]">
            Nossos cuidados
          </p>
          <div className="grid grid-cols-3 gap-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl bg-white/10 p-3 text-white">
                <span
                  className={`mb-7 grid h-7 w-7 place-items-center rounded-lg text-[#173f35] ${service.color}`}
                >
                  {service.icon}
                </span>
                <strong className="font-display text-xs">{service.title}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="px-5 py-7">
          <div className="mb-4 flex items-end justify-between">
            <h4 className="font-display text-2xl font-black leading-none text-[#173f35]">
              Galeria
              <br />
              de fofura.
            </h4>
            <a href="#galeria" className="text-[9px] font-black uppercase text-[#ff6b51]">
              Ver tudo
            </a>
          </div>
          <div className="grid h-56 grid-cols-2 gap-2">
            <img
              src={gallery[0].src}
              alt={gallery[0].alt}
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="grid gap-2">
              <img
                src={gallery[1].src}
                alt={gallery[1].alt}
                className="h-full min-h-0 w-full rounded-2xl object-cover"
              />
              <img
                src={gallery[2].src}
                alt={gallery[2].alt}
                className="h-full min-h-0 w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="m-3 rounded-[1.75rem] bg-[#ff6b51] px-6 py-8 text-center text-white">
          <PawIcon />
          <h4 className="mt-3 font-display text-3xl font-black leading-none">
            Bora marcar
            <br />
            esse mimo?
          </h4>
          <a
            href="#contatos"
            className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-[10px] font-black text-[#173f35]"
          >
            Falar com a gente
          </a>
        </div>
        <footer className="flex items-center justify-between px-5 py-5 text-[9px] text-[#587269]">
          <PawMark compact />
          <span>Feito com carinho.</span>
        </footer>
      </div>
    </section>
  );
}

function Palette() {
  const colors = [
    ["Verde floresta", "#173F35"],
    ["Coral alegre", "#FF6B51"],
    ["Creme suave", "#F6F2E8"],
    ["Amarelo solar", "#F4D35E"],
    ["Lima fresca", "#B9DC5B"],
  ];
  return (
    <aside className="bg-white px-5 py-6 lg:px-10" aria-label="Paleta de cores">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#ff6b51]">
            Identidade visual
          </span>
          <p className="font-display text-xl font-black text-[#173f35]">Paleta Mimo Pet</p>
        </div>
        <div className="grid grid-cols-5 gap-2 sm:flex">
          {colors.map(([name, value]) => (
            <div key={value} className="group relative">
              <div
                className="h-12 min-w-12 rounded-xl border border-black/5 sm:w-20"
                style={{ backgroundColor: value }}
              />
              <span className="mt-1.5 hidden text-center text-[8px] font-bold uppercase tracking-wide text-[#587269] lg:block">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="bg-[#173f35] px-5 py-8 text-white lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="brightness-0 invert">
          <PawMark />
        </div>
        <p className="text-xs text-white/50">© 2025 Mimo Pet. Cuidado que dá gosto.</p>
        <div className="flex gap-4 text-xs font-bold">
          <a href="#home">Home</a>
          <a href="#galeria">Galeria</a>
          <a href="#contatos">Contatos</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      
      <div className="relative">
        <Header />
        <Hero />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </div>
      
    </main>
  );
}

function PawIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="inline-block h-5 w-5 fill-current">
      <circle cx="7" cy="7" r="2.3" />
      <circle cx="17" cy="7" r="2.3" />
      <circle cx="4.5" cy="12" r="2" />
      <circle cx="19.5" cy="12" r="2" />
      <path d="M12 10.5c-3.2 0-6 3.1-6 5.8 0 2.2 1.7 3.5 3.7 2.7 1.5-.6 3.1-.6 4.6 0 2 .8 3.7-.5 3.7-2.7 0-2.7-2.8-5.8-6-5.8Z" />
    </svg>
  );
}

function ArrowIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-4 w-4 fill-none stroke-current ${dark ? "text-[#173f35]" : ""}`}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6l1.2 1.2L12 21l7.6-7.6 1.2-1.2a5.4 5.4 0 0 0 0-7.6Z" />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="7" r="3" />
      <circle cx="6" cy="17" r="3" />
      <path d="m8.7 8.4 11.3 8.1M8.7 15.6 20 7.5" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 1.5c.5 5.2 3.3 8 8.5 8.5-5.2.5-8 3.3-8.5 8.5-.5-5.2-3.3-8-8.5-8.5 5.2-.5 8-3.3 8.5-8.5Z" />
    </svg>
  );
}
