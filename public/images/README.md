# Image slots

Any image can be swapped: replace a file with a real JPG **using the same file name** and it appears automatically. The recommended sizes are minimums; landscape photos should be at least as wide as listed. Keep each file under about 400 KB (export at 75 to 80 percent JPG quality).

Photos from Instagram @satlujtrpt are already in place for: hero-fleet, og-image, why-satluj, about-hero, about-story, services-hero, fleet-hero, contact-hero, team-01 to 03, service-container, service-loose-cargo, service-gcc, truck-container-01 and 02. They are only 640px originals, so higher resolution versions should replace them when available. `npm run placeholders` only fills missing files.

| File | Used on | Put this photo here | Size |
|---|---|---|---|
| hero-fleet.jpg | Home hero | Wide, dramatic shot of the trucks lined up at the yard (it sits under a dark red overlay) | 2400x1400 |
| og-image.jpg | Social sharing preview | Logo and truck photo, brand red | 1200x630 |
| why-satluj.jpg | Home "Why Satluj" | Driver with a truck, portrait crop | 1200x1500 |
| about-hero.jpg | About hero | Truck on a UAE highway | 2400x1200 |
| about-story.jpg | About "Who we are" | Fleet parked at the Jabal Ali yard, portrait crop | 1200x1600 |
| team-01.jpg | About team (large) | Group team photo from Instagram @satlujtrpt | 1600x1200 |
| team-02.jpg | About team | Drivers with the trucks | 1600x900 |
| team-03.jpg | About team | Office or dispatch team | 1600x900 |
| services-hero.jpg | Services hero | Container truck at the port | 2400x1200 |
| service-container.jpg | Services: Container Transport | 20ft or 40ft container on a trailer | 1600x1000 |
| service-loose-cargo.jpg | Services: Loose Cargo | Palletised cargo being loaded | 1600x1000 |
| service-flatbed-lowbed.jpg | Services: Flatbed and Low-Bed | Machinery on a low-bed | 1600x1000 |
| service-tipper.jpg | Services: Tipper | Tipper at a construction site | 1600x1000 |
| service-gcc.jpg | Services: GCC Cross-Border | Truck on a desert highway or at a border | 1600x1000 |
| service-fleet-hire.jpg | Services: Dedicated Fleet Hire | Several trucks at a client site | 1600x1000 |
| fleet-hero.jpg | Fleet hero | Row of trucks | 2400x1200 |
| contact-hero.jpg | Contact hero | Office exterior or dispatch desk | 2400x1200 |
| truck-flatbed-01.jpg | Fleet + home strip | Flatbed trailer | 1200x900 |
| truck-flatbed-02.jpg | Fleet + home strip | Flatbed with a heavy tractor | 1200x900 |
| truck-container-01.jpg | Fleet + home strip | 20ft container trailer | 1200x900 |
| truck-container-02.jpg | Fleet | 40ft container trailer | 1200x900 |
| truck-tipper-01.jpg | Fleet + home strip | Tipper truck | 1200x900 |
| truck-tipper-02.jpg | Fleet | Tipper truck, second angle | 1200x900 |
| truck-lowbed-01.jpg | Fleet + home strip | Low-bed trailer | 1200x900 |
| truck-lowbed-02.jpg | Fleet | Low-bed with equipment | 1200x900 |

To add a new fleet card, add an entry to `fleet` in `lib/site-config.ts` and drop the matching image here.
