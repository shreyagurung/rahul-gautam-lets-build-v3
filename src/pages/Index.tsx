import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import HoverCarousel from "@/components/HoverCarousel";
import { typography } from "@/lib/typography";

import heroImg from "@/assets/hero.jpg";
import immersion1 from "@/assets/immersion-1.jpg";
import immersion2 from "@/assets/immersion-2.jpg";
import transitionImg from "@/assets/transition.jpg";



const Index = () => {
  const scrollToWork = () => {
    document
      .getElementById("selected-work")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background text-foreground">

      {/* Hero */}
      <section className="relative h-screen flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Bamboo structure under construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 p-8 md:p-16 pb-16 md:pb-24"
        >
          <h1 className={`${typography.pageTitle} text-background-secondary`}>
            Rahul Gautam
          </h1>
          <p className="mt-3 text-sm md:text-base text-background-secondary/80 tracking-wide">
            Builder · Natural Materials · Site-Specific Construction
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-36 bg-background-secondary">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="max-w-2xl">
              <p className={`${typography.editorial} text-foreground-secondary mb-8`}>
                Where material meets intention
              </p>

              <p className={`${typography.body} text-foreground/90`}>
                Rahul Gautam works at the intersection of craft, landscape, and necessity.
                Over the past decade, his practice has grown from building with bamboo to a
                broader engagement with natural materials, mud, stone, thatch, and fiber,
                shaped by the demands of each site and the hands that build it.
              </p>

              <p className={`mt-6 ${typography.body} text-foreground/90`}>
                His work resists the impulse to impose. Instead, it listens to terrain,
                climate, community, and the quiet intelligence of materials that have been
                used for centuries. The result is architecture and installations that feel
                both ancient and entirely present.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Visual Immersion */}
      <section className="py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <FadeIn>
            <img
              src={immersion1}
              alt="Bamboo joinery detail"
              loading="lazy"
              className="w-full h-[50vh] md:h-[60vh] object-cover mb-6"
            />
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="md:col-span-3">
                <img
                  src={immersion2}
                  alt="Inside a bamboo pavilion"
                  loading="lazy"
                  className="w-full h-[50vh] md:h-[55vh] object-cover"
                />
              </div>

              <div className="md:col-span-2 flex items-center">
                <p className={`${typography.editorial} text-foreground-secondary leading-relaxed`}>
                  Every joint holds a conversation between what the material wants to do
                  and what the space asks for.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Transition Banner */}
      <motion.section
        className="relative h-[50vh] md:h-[60vh] flex items-center justify-center cursor-pointer group"
        onClick={scrollToWork}
      >
        <div className="absolute inset-0">
          <img
            src={transitionImg}
            alt="Bamboo structures in mist"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center"
        >
          <p className={`${typography.metadata} text-background-secondary/70 mb-3`}>
            Explore
          </p>

          <p className={`${typography.sectionHeading} text-background-secondary`}>
            Creations
          </p>

          <motion.div
            className="mt-6 w-px h-8 bg-background-secondary/40 mx-auto"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          />
        </motion.div>
      </motion.section>

      {/* Selected Work */}
      <section id="creations" className="py-20 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-10 space-y-12">

          {/* Architecture */}
          <div>
            <FadeIn>
              <Link to="/architecture">
                <p className={`${typography.metadata} mb-3 text-accent`}>
                  Architecture
                </p>
              </Link>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <FadeIn delay={0.1}>
                <Link to="/architecture#tea-tourism-center" className="group block">
                  <HoverCarousel
                    images={[
                      "/images/architecture/tea-tourism-center/cover.svg",
                      "/images/architecture/tea-tourism-center/01.jpg",
                      "/images/architecture/tea-tourism-center/02.jpg",
                      "/images/architecture/tea-tourism-center/03.jpg",
                      "/images/architecture/tea-tourism-center/04.jpg"
                    ]}
                    alt="Tea Tourism Center"
                    className="w-full h-[30vh] md:h-[35vh]"
                  />
                  <p className="mt-3 text-sm font-medium group-hover:text-accent">
                    Tea Tourism Center
                  </p>
                </Link>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Link to="/architecture#deepsthal-gurukulam-gym-pavilion" className="group block">
                  <HoverCarousel
                    images={[
                      "/images/architecture/gym-pavillion/cover.jpg",
                      "/images/architecture/gym-pavillion/01.jpg",
                      "/images/architecture/gym-pavillion/02.jpg",
                      "/images/architecture/gym-pavillion/03.jpg"
                    ]}
                    alt="Deepsthal Gurukulam Gym Pavilion"
                    className="w-full h-[30vh] md:h-[35vh]"
                  />
                  <p className="mt-3 text-sm font-medium group-hover:text-accent">
                    Deepsthal Gurukulam Gym Pavilion
                  </p>
                </Link>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Link to="/architecture#urmika-gazebo" className="group block">
                  <HoverCarousel
                    images={[
                      "/images/architecture/urmika-gazebo/cover.jpg",
                      "/images/architecture/urmika-gazebo/01.jpg",
                      "/images/architecture/urmika-gazebo/02.jpg"
                    ]}
                    alt="Urmika Gazebo"
                    className="w-full h-[30vh] md:h-[35vh]"
                  />
                  <p className="mt-3 text-sm font-medium group-hover:text-accent">
                    Urmika Gazebo
                  </p>
                </Link>
              </FadeIn>

            </div>
          </div>

          {/* Installations */}
          <div>
            <FadeIn>
              <Link to="/installations">
                <p className={`${typography.metadata} mb-3 text-accent`}>
                  Installations
                </p>
              </Link>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FadeIn delay={0.1}>
                <Link to="/installations#chaal" className="group block">
                  <HoverCarousel 
                    images={[
                      "/images/installations/chaal/cover.jpeg",
                      "/images/installations/chaal/01.jpeg",
                      "/images/installations/chaal/02.jpeg",
                      "/images/installations/chaal/03.jpeg"
                    ]} 
                    alt="Chaal"
                    className="w-full h-[30vh] md:h-[35vh]"
                  />
                  <p className="mt-3 text-sm font-medium group-hover:text-accent">Chaal</p>
                </Link>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Link to="/installations#min-rukam" className="group block">
                  <HoverCarousel
                    images={[
                      "/images/installations/min-rukam/cover.jpeg",
                      "/images/installations/min-rukam/01.jpeg",
                      "/images/installations/min-rukam/02.jpeg",
                      "/images/installations/min-rukam/03.jpeg"
                    ]}
                    alt="Min-Rukam"
                    className="w-full h-[30vh] md:h-[35vh]"
                  />
                  <p className="mt-3 text-sm font-medium group-hover:text-accent">
                    Min-Rukam
                  </p>
                </Link>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link to="/installations#make-shift" className="group block">
                  <HoverCarousel
                    images={[
                      "/images/installations/make-shift/cover.jpeg",
                      "/images/installations/make-shift/01.jpeg",
                      "/images/installations/make-shift/02.jpeg",
                      "/images/installations/make-shift/03.jpeg"
                    ]}
                    alt="Make-Shift"
                    className="w-full h-[30vh] md:h-[35vh]"
                  />
                  <p className="mt-3 text-sm font-medium group-hover:text-accent">
                    Make-Shift
                  </p>
                </Link>
              </FadeIn>
            </div>
          </div>

          {/* Festival Spaces */}
          <div>
            <FadeIn>
              <Link to="/festival-spaces">
                <p className={`${typography.metadata} mb-3 text-accent`}>
                  Festival Spaces
                </p>
              </Link>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FadeIn delay={0.1}>
                <Link to="/festival-spaces#campone-campsite-2022" className="group block">
                  <HoverCarousel 
                    images={[
                      "/images/festival-spaces/campone-campsite-2022/cover.jpeg",
                      "/images/festival-spaces/campone-campsite-2022/01.jpeg",
                      "/images/festival-spaces/campone-campsite-2022/02.jpeg",
                      "/images/festival-spaces/campone-campsite-2022/03.jpeg"
                    ]} 
                    alt="Campone Campsite"
                    className="w-full h-[30vh] md:h-[35vh]"
                  />
                  <p className="mt-3 text-sm font-medium group-hover:text-accent">Campone Campsite</p>
                </Link>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Link to="/festival-spaces#monyul-gathering-2020" className="group block">
                  <HoverCarousel
                    images={[
                       "/images/festival-spaces/monyul-gathering-2020/cover.jpeg",
                      "/images/festival-spaces/monyul-gathering-2020/01.jpeg",
                      "/images/festival-spaces/monyul-gathering-2020/02.jpeg",
                      "/images/festival-spaces/monyul-gathering-2020/03.jpeg"
                    ]}
                    alt="Monyul Gathering"
                    className="w-full h-[30vh] md:h-[35vh]"
                  />
                  <p className="mt-3 text-sm font-medium group-hover:text-accent">
                    Monyul Gathering
                  </p>
                </Link>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link to="/festival-spaces#ziro-festival-of-music-2023" className="group block">
                  <HoverCarousel
                    images={[
                       "/images/festival-spaces/ziro-festival-2023/cover.jpeg",
                      "/images/festival-spaces/ziro-festival-2023/01.jpeg",
                      "/images/festival-spaces/ziro-festival-2023/02.jpeg",
                      "/images/festival-spaces/ziro-festival-2023/03.jpeg"
                    ]}
                    alt="Ziro Festival 2023"
                    className="w-full h-[30vh] md:h-[35vh]"
                  />
                  <p className="mt-3 text-sm font-medium group-hover:text-accent">
                    Ziro Festival 2023
                  </p>
                </Link>
              </FadeIn>
            
            </div>
          </div>

        </div>
      </section>

      {/* Final Section */}
      <section id="contact" className="py-24 md:py-36 bg-background-secondary scroll-mt-20">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="max-w-2xl">
              <p className={`${typography.editorial} text-foreground-secondary mb-8`}>
                Building is a form of listening
              </p>

              <p className={`${typography.body} text-foreground/90 mb-6`}>
                Each project begins with the site, its soil, its light, its people.
                There is no fixed method, only a willingness to let the place speak first.
                What emerges is negotiated between hand and material, between what is imagined
                and what is possible.
              </p>

              <p className={`${typography.body} text-foreground/90`}>
                If you are interested in working together or simply want to talk about
                building with natural materials, I would be glad to hear from you.
              </p>

              <div className="mt-12 pt-8 border-t border-border">
                <p className={`${typography.caption} text-foreground-secondary mb-1`}>Get in touch</p>
                <a
                  href="mailto:rahul@example.com"
                  className={`${typography.body} hover:text-accent transition-colors duration-300`}
                >
                  rahul@example.com
                </a>
                <div className="mt-6">
                  <Link
                    to="/about"
                    className={`${typography.navLink} tracking-wide`}
                  >
                    More about Rahul →
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className={`${typography.metadata} text-foreground-secondary`}>
            © {new Date().getFullYear()} Rahul Gautam
          </p>
          <p className={`${typography.metadata} text-foreground-secondary`}>
            Built with natural materials and intention
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Index;