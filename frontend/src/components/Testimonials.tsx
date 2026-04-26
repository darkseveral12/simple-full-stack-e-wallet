const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-base-200 min-h-[80vh]">
      <div className="flex flex-col items-center justify-center gap-4 pb-8 pt-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
          Testimonials
        </h1>
        <p className="text-base-content/70 max-w-md">
          See what users are saying about the speed, security, and reliability
          of our e-wallet.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-20 lg:px-30 pb-24 justify-items-center">
          {/* Card 1 */}
          <div className="card bg-base-100 ">
            <div className="card-body gap-4">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="https://scontent.fmnl25-5.fna.fbcdn.net/v/t39.30808-6/485358508_677659554768622_7246485175116179703_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeETfR4HSXtdiSmvjCQ3k3H1-ZmkD1rV84H5maQPWtXzgZXdc8FFEIypUkPHGeY4jvuzSyuAhHhr_ZJBayJ6pPUI&_nc_ohc=zLpSWOS4fCEQ7kNvwE3GTuT&_nc_oc=Adpe2PGDRSQTWbf37rKbaE2qAo1QVwEbRqhgpRKG8MCGPUqCAWDKDyyQFYEMaiyEg4E&_nc_zt=23&_nc_ht=scontent.fmnl25-5.fna&_nc_gid=lA-QDTvPMvz5biNUUQclMA&oh=00_Af2GGaF0U6uo_-JIwiVCEisct8HY9Y397W0lMa_Kjbpo-A&oe=69F1DF37" />
                </div>
              </div>
              <h2 className="card-title">Cleven Castillo</h2>
              <p className="text-base-content/70">Small Business Owner</p>
              <p className="before:content-['“'] after:content-['”']">
                Transactions are instant and reliable. I can manage payments for
                my business without delays or complications.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 ">
            <div className="card-body gap-4">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeE0wraEWfkv8AFAbMfgsVIMWt9TLzuBU1Ba31MvO4FTUOVuaknjKRR0KqjhWnYHsQXjdVcDdaVHlZpneJ3_lICU&_nc_ohc=miSQN1ZRKdoQ7kNvwHyM7E6&_nc_oc=AdoM7Q1F3HsvjK1VXvtwHVL8hd4f9hoDZlE7W0CDF845RnwSUtTXCNVLGv1IGwFxktU&_nc_zt=24&_nc_ht=scontent.fmnl25-1.fna&oh=00_Af0lpr_dNpVhp70mBVXKIpUqV_fpEOAM7XPOLTm5oT_h9w&oe=6A139DBA" />
                </div>
              </div>
              <h2 className="card-title">John Andrey Dorias</h2>
              <p className="text-base-content/70">Freelance Developer</p>
              <p className="before:content-['“'] after:content-['”']">
                I like how secure everything feels. Payments are protected and I
                never worry when sending or receiving money.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 ">
            <div className="card-body gap-4">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t39.30808-1/536272122_1310033754160105_5838082809961502455_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEjlqdRkPfvokK-IwfqHiiiAzrJzQHqeSwDOsnNAep5LCkBu59DQZLwtuPOJOGARRLMBK3Q5YBqSV3brDo1DeMs&_nc_ohc=p8tJc4ouPp8Q7kNvwECun3F&_nc_oc=AdrzXLYyeEeJab__yli1-ulaYIE4Bvcq7aVuQhFDoDW-AmTERG9z5fV3VWX-7u3fT2I&_nc_zt=24&_nc_ht=scontent.fmnl25-1.fna&_nc_gid=6g5_utDX-gkVgjCY3Tz3dw&_nc_ss=7b2a8&oh=00_Af0i9v_MuQgXEd4z9ObAQNiBx0SAoInK5nEsckdXP_1i9Q&oe=69F1DC47" />
                </div>
              </div>
              <h2 className="card-title">Adrian Morana</h2>
              <p className="text-base-content/70">College Student</p>
              <p className="before:content-['“'] after:content-['”']">
                Super fast and easy to use. It makes paying for school needs and
                online purchases much more convenient.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card bg-base-100 ">
            <div className="card-body gap-4">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeE0wraEWfkv8AFAbMfgsVIMWt9TLzuBU1Ba31MvO4FTUOVuaknjKRR0KqjhWnYHsQXjdVcDdaVHlZpneJ3_lICU&_nc_ohc=miSQN1ZRKdoQ7kNvwHyM7E6&_nc_oc=AdoM7Q1F3HsvjK1VXvtwHVL8hd4f9hoDZlE7W0CDF845RnwSUtTXCNVLGv1IGwFxktU&_nc_zt=24&_nc_ht=scontent.fmnl25-1.fna&oh=00_Af0lpr_dNpVhp70mBVXKIpUqV_fpEOAM7XPOLTm5oT_h9w&oe=6A139DBA" />
                </div>
              </div>
              <h2 className="card-title">Jullian DeCastro</h2>
              <p className="text-base-content/70">CEO of Fintech</p>
              <p className="before:content-['“'] after:content-['”']">
                It’s incredibly convenient and user-friendly, turning everyday
                payments and shopping into a smooth experience.
              </p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="card bg-base-100 ">
            <div className="card-body gap-4">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/656709615_2456609121458772_8536375820272567192_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGhvGHadxDbXV-BVGw2pLGHbc-jg7a4hahtz6ODtriFqDU7cu_ghA0agicBz2ORvT_5g__CAZpdYCK9NgqPV8Yr&_nc_ohc=leRb3W8cr5EQ7kNvwHAAFI1&_nc_oc=AdqfknhyoPKQuf-hxIxx9Bbikl-euRLu2W7AOs0rsv28oFAIIgn08_3rBiwrgHyfQp8&_nc_zt=23&_nc_ht=scontent.fmnl25-4.fna&_nc_gid=VKhmP_mBSGRvFsDt1jSduA&oh=00_Af2lyONkicYc-hEqXeCvbEHFWriulyAPJQEFyZRyYiHlwA&oe=69F1F40C" />
                </div>
              </div>
              <h2 className="card-title">Kyle Baldelomar</h2>
              <p className="text-base-content/70">Gamer</p>
              <p className="before:content-['“'] after:content-['”']">
                It’s quick and straightforward to use, making everyday payments
                and online shopping much easier.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card bg-base-100 ">
            <div className="card-body gap-4">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="https://scontent.fmnl45-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeE0wraEWfkv8AFAbMfgsVIMWt9TLzuBU1Ba31MvO4FTUOVuaknjKRR0KqjhWnYHsQXjdVcDdaVHlZpneJ3_lICU&_nc_ohc=miSQN1ZRKdoQ7kNvwG5yRKu&_nc_oc=AdpvL25cscRi8pbskFjoches0_s287laEcQmm21EnZufCmhVbtSAcBQS8pxwnuxCKK0&_nc_zt=24&_nc_ht=scontent.fmnl45-1.fna&oh=00_Af34OtW7KYGI_uzyv6lMv1I90UHFMaYf_rDikwPGdykf0g&oe=6A139DBA" />
                </div>
              </div>
              <h2 className="card-title">Carlo Samaniego</h2>
              <p className="text-base-content/70">Research Leader</p>
              <p className="before:content-['“'] after:content-['”']">
                It’s fast and easy to use, making daily payments and online
                shopping more convenient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
