import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";


const AboutPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Top nav */}
      <div className="max-w-content mx-auto px-6 md:px-10 pt-8">
        <Link
          to="/"
          className="text-sm text-foreground-secondary hover:text-accent transition-colors duration-300 tracking-wide"
        >
          ← Back
        </Link>
      </div>

      {/* Opening */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="text-foreground-secondary text-sm tracking-widest uppercase mb-6">
              About
            </p>
            <div className="w-12 h-px bg-border mb-10" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-editorial text-3xl md:text-5xl text-foreground-secondary leading-snug max-w-3xl">
              A practice shaped slowly, through travel, material, and the company of people
              who build with their hands.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Portrait image */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <FadeIn>
            <img
              src={portraitImg}
              alt="Rahul on site"
              loading="lazy"
              className="w-full h-[55vh] md:h-[70vh] object-cover"
              width={1600}
              height={1000}
            />
          </FadeIn>
        </div>
      </section>

      {/* Beginnings */}
      <section className="py-16 md:py-24 bg-background-secondary">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <FadeIn>
                <p className="font-editorial text-lg text-foreground-secondary">
                  Beginnings
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <FadeIn delay={0.1}>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-6">
                  Rahul trained as a civil engineer. For a while, he did what was expected —
                  a job, a desk, drawings handed down through long chains of decisions made
                  far from the places they would shape.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  At some point, that distance began to feel unworkable. He left, with no
                  particular plan, and started moving across the country.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Journey image with quiet quote */}
      <section className="py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10">
            <div className="md:col-span-2 flex items-end">
              <FadeIn>
                <p className="font-editorial text-lg md:text-xl text-foreground-secondary leading-relaxed">
                  The years that followed were less about learning a craft and more about
                  unlearning a way of seeing.
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-3">
              <FadeIn delay={0.15}>
                <img
                  src={journeyImg}
                  alt="Travel across India"
                  loading="lazy"
                  className="w-full h-[50vh] md:h-[65vh] object-cover"
                  width={1400}
                  height={1000}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Learning on the ground */}
      <section className="py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <FadeIn>
                <p className="font-editorial text-lg text-foreground-secondary">
                  Learning by being there
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <FadeIn delay={0.1}>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-6">
                  In villages, monasteries, forests, and roadside workshops, he watched
                  people build with what they had — bamboo cut from a nearby grove, mud
                  from the field behind the house, stone gathered from a riverbed. None of
                  it arrived in trucks. None of it required permission from someone far
                  away.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  He picked things up by helping. By holding the other end of a pole, by
                  mixing plaster wrong and being shown again, by sitting through long
                  afternoons where almost nothing seemed to happen and yet something was
                  always being decided.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Material image */}
      <section className="py-8 md:py-16">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <FadeIn>
            <img
              src={materialImg}
              alt="Working with bamboo"
              loading="lazy"
              className="w-full h-[55vh] md:h-[70vh] object-cover"
              width={1600}
              height={1000}
            />
          </FadeIn>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 md:py-24 bg-background-secondary">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <FadeIn>
                <p className="font-editorial text-lg text-foreground-secondary">
                  Material
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <FadeIn delay={0.1}>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-6">
                  Bamboo became a long companion. It is generous and difficult in equal
                  measure — alive enough to push back against bad decisions, forgiving
                  enough to reward patience. Working with it taught him to think in fibers
                  and joints rather than lines on paper.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  Around bamboo, other materials arrived. Mud, lime, thatch, stone, jute,
                  reclaimed wood. Each carries its own grammar. The work, as he understands
                  it now, is mostly the slow business of learning to listen to that
                  grammar before speaking over it.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Working with people */}
      <section className="py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10">
            <div className="md:col-span-3">
              <FadeIn>
                <img
                  src={siteImg}
                  alt="On site with artisans"
                  loading="lazy"
                  className="w-full h-[50vh] md:h-[65vh] object-cover"
                  width={1400}
                  height={1000}
                />
              </FadeIn>
            </div>
            <div className="md:col-span-2 flex items-center">
              <FadeIn delay={0.15}>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  Most projects are built alongside artisans whose knowledge is older and
                  steadier than his own. The drawing, when there is one, is a beginning —
                  not a verdict. Plans change at the cut, at the joint, at the moment a
                  piece of bamboo refuses to bend the way it was supposed to. Improvisation
                  is not an interruption of the work. It is the work.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Contexts */}
      <section className="py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <FadeIn>
                <p className="font-editorial text-lg text-foreground-secondary">
                  Where the work has gone
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <FadeIn delay={0.1}>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  Over the years the work has moved through tea estates, mountain
                  monasteries, music festivals, farmhouses, gurukulams, and short-lived
                  campsites built for a few hundred people and then taken down again. Each
                  site asks for something different. The hope, every time, is to leave
                  something that belongs to the place rather than to him.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Practice — credentials, restructured */}
      <section className="py-24 md:py-36 bg-background-secondary">
        <div className="max-w-content mx-auto px-6 md:px-10">
          {/* Entry */}
          <div className="mb-20 md:mb-28 max-w-3xl">
            <FadeIn>
              <p className="text-foreground-secondary text-sm tracking-widest uppercase mb-6">
                Practice
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-editorial text-2xl md:text-4xl text-foreground-secondary leading-snug">
                The work sits between material, people, and place.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="w-5 h-px bg-accent mt-8" />
            </FadeIn>
          </div>

          {/* Stacked credential blocks */}
          <div className="space-y-20 md:space-y-28">
            {/* 01 — Background (slightly more presence) */}
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4">
                  <p className="font-editorial text-base text-foreground-secondary mb-3">
                    01
                  </p>
                  <p className="font-editorial text-xl md:text-2xl text-foreground-secondary">
                    Background
                  </p>
                </div>
                <div className="md:col-span-7 md:col-start-6">
                  <div className="w-5 h-px bg-accent mb-6" />
                  <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                    Trained as a civil engineer and worked briefly within conventional
                    practice before stepping away to learn on the ground. The years that
                    followed — moving across India, building alongside people who had
                    never opened a drawing — became the real education. The practice
                    today carries both: the discipline of an engineer and the patience of
                    someone who learned by doing.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* 02 — Collaborators */}
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4">
                  <p className="font-editorial text-base text-foreground-secondary mb-3">
                    02
                  </p>
                  <p className="font-editorial text-xl md:text-2xl text-foreground-secondary">
                    Collaborators
                  </p>
                </div>
                <div className="md:col-span-7 md:col-start-6">
                  <div className="w-5 h-px bg-accent mb-6" />
                  <div className="text-base md:text-lg leading-relaxed text-foreground/90 space-y-1">
                    <p>Bamboo artisans · Masons &amp; earth builders</p>
                    <p>Festival production teams · Carpenters</p>
                    <p>Architects · Landowners &amp; community stewards</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 03 — Recognition */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4">
                  <p className="font-editorial text-base text-foreground-secondary mb-3">
                    03
                  </p>
                  <p className="font-editorial text-xl md:text-2xl text-foreground-secondary">
                    Recognition
                  </p>
                </div>
                <div className="md:col-span-7 md:col-start-6">
                  <div className="w-5 h-px bg-accent mb-6" />
                  <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                    The work has appeared in independent publications on natural building,
                    and has been shared through occasional talks and workshops on
                    site-led practice. Most of it, though, lives where it was built —
                    quietly, in the places it was made for.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Closing / contact */}
      <section className="py-24 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="font-editorial text-lg text-foreground-secondary mb-8">
                Still learning, mostly by doing
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                The practice continues to move where the work takes it. If something here
                resonates, or if you are thinking through a site of your own, you are
                welcome to write.
              </p>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-foreground-secondary mb-1">Get in touch</p>
                <a
                  href="mailto:rahul@example.com"
                  className="text-base hover:text-accent transition-colors duration-300"
                >
                  rahul@example.com
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-foreground-secondary">
            © {new Date().getFullYear()} Rahul Gautam
          </p>
          <Link
            to="/"
            className="text-xs text-foreground-secondary hover:text-accent transition-colors duration-300"
          >
            Return home
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
