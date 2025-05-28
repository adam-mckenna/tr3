export const About = () => (
  <>
    <section className="w-full max-w-128 mx-auto px-6 py-8 md:p-0 md:pt-12">
      <h1 className="font-[700] text-3xl text-elba -tracking-[1.25px]">
        Hello, my name is Adam.
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
        <p className="text-elba leading-[1.6] tracking-[-.25px]">
          I started running in 2017. Like most people in the North East, my
          running journey began with the{" "}
          <a
            className="text-sea-blue underline"
            href="https://www.greatrun.org/events/great-north-run/"
            target="_blank"
          >
            Great North Run
          </a>
          .
        </p>
        <p className="text-elba leading-[1.6] tracking-[-.25px]">
          Fast-forward to 2020, the bordem of lockdown inspired a flurry of
          running.
        </p>
        <p className="text-elba leading-[1.6] tracking-[-.25px]">
          By 2025, I had ran marathons all over the world, from{" "}
          <a
            href="https://www.strava.com/activities/13018814997"
            className="text-sea-blue underline"
            target="_blank"
          >
            Thailand
          </a>{" "}
          to{" "}
          <a
            href="https://www.strava.com/activities/10737248846"
            className="text-sea-blue underline"
            target="_blank"
          >
            New Zealand
          </a>
          .
        </p>
        <p className="text-elba leading-[1.6] tracking-[-.25px]">
          A "obligation" to run the local half-marathon has transformed into a
          deep passion: I <i>love</i> running.
        </p>
        <p className="text-elba leading-[1.6] tracking-[-.25px]">
          In particular, the science of running, nutrition and endurance
          fascinates me.
        </p>
        <p className="text-elba leading-[1.6] tracking-[-.25px]">
          This blog explores that fascination.
        </p>
      </div>
    </section>
  </>
);
