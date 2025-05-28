export const About = () => (
  <>
    <section className="w-full max-w-128 mx-auto px-6 py-8 md:p-0 md:pt-12">
      <h1 className="font-[700] text-3xl text-elba -tracking-[1.25px]">
        Hi, my name is Adam.
      </h1>
      <p className="text-philippine-grey text-xl leading-[25.5px] -tracking-[.5px] font-serif mt-1">
        I'm a passionate runner who builds websites for a living. I decided to
        put those two skills together to create this blog.
      </p>

      <div
        className="w-full h-[300px] bg-philippine-grey z-20 relative rounded mt-4 bg-cover bg-position-[50%_100%]"
        style={{
          backgroundImage: `url('./src/assets/images/adam_mckenna_running.jpg')`,
        }}
      />
      <p className="text-philippine-grey text-xs font-light mt-2">
        At the&nbsp;
        <a
          className="text-sea-blue underline"
          href="https://www.parkrun.org.uk/blythlinks/"
          target="_blank"
        >
          Blyth Links Parkrun
        </a>
      </p>
    </section>

    <section className="bg-white w-full min-h-[400px] -mt-[150px] px-6 pt-8 pb-12 md:p-0 md:pb-8">
      <div className="grid gap-4 w-full max-w-128 mx-auto pt-32 md:pt-[172px] md:pb-8">
        <p>
          I started running in 2017. Like most people in the North East, I ran
          the Great North Run.
        </p>
        <p>
          Fast-forward to 2020, and the bordem of lockdown inspired a flurry of
          running. Fast forward a few years later, and I've ran a bunch of
          marathons across the world.
        </p>
        <p>
          A "obligation" to run my local race has transformed into a deep
          passion. I love running.
        </p>
        <p>
          In particular, the science of running, nutrition and endurance
          fascinates me.
        </p>
        <p>This blog explores that fascination.</p>
      </div>
    </section>
  </>
);
