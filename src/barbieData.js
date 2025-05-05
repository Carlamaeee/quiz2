const barbieMovies = [
    {
      title: "Barbie in the Nutcracker",
      year: 2001,
      image: "https://static.wikia.nocookie.net/barbie-movies/images/c/c5/1-poster-bmw.jpg",
      description: "Barbie plays a girl named Clara, who is gifted a Nutcracker for Christmas. After Clara is magically shrunk to the size of a doll, she goes to another world to try and break the spell.",
    },
    {
      title: "Barbie as Rapunzel",
      year: 2002,
      image: "https://static.wikia.nocookie.net/barbie-movies/images/5/5b/Barbie_as_Rapunzel_DVD_cover_2002.jpg",
      description: "The film follows the story of a lost princess named Rapunzel who lives far away in the forest in a big tower with a wicked witch named Gothel who treats her as a servant, but Rapunzel wants to be independent and wants to paint, which Gothel hates."
    },
    {
      title: "Barbie of Swan Lake",
      year: 2003,
      image: "https://static.wikia.nocookie.net/barbie-movies/images/1/14/3-poster-bmw.jpg",
      description: "The film follows the story of a girl named Odette, a shy village girl who thinks she is not brave. One day fate takes her to an Enchanted Forest, and she discovers that she is the only person who can save it from the evil wizard, Rothbart."
    },
    {
        title: "Barbie as The Princess and the Pauper",
        year: 2004,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/5/57/Barbie_as_The_Princess_and_the_Pauper.jpg",
        description: "It is the first Barbie musical and stars Barbie in two roles: a blonde princess named Anneliese and a brunette pauper named Erika. The girls dream of freedom and by following their heart, they will make their dreams come true."
    },
    {
        title: "Barbie: Fairytopia",
        year: 2005,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/e/e1/5-op-bf-vi.jpg",
        description: "The movie follows the story of Elina, a wingless fairy who goes on a journey to save the enchanted land of Fairytopia."
    },
    {
        title: "Barbie and the Magic of Pegasus",
        year: 2005,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/7/75/Barbie_and_the_Magic_of_Pegasus_Digital_Copy.png",
        description: "The film follows the story of Princess Annika, who has to save her parents after an evil wizard named Wenlock turns them to stone."
    },
    {
        title: "Barbie Fairytopia: Mermaidia",
        year: 2006,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/d/d1/Barbie_Fairytopia_Mermaidia_Digital_Copy.png",
        description: "The movie is a sequel to Barbie Fairytopia. Elina goes on a journey to save Prince Nalu from Laverna."
    },
    {
        title: "The Barbie Diaries",
        year: 2006,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/9/95/The_Barbie_Diaries_Cover.png",
        description: "It is the first movie about Barbie as herself. The movie follows Barbie during her sophomore year in high school, as she encounters love, magic, and true friendship."
    },
    {
        title: "Barbie in The 12 Dancing Princesses",
        year: 2006,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/7/7f/Barbie_in_The_12_Dancing_Princesses_DVD_cover_2006.jpg",
        description: " The movie is based on the Brothers Grimm story The Twelve Dancing Princesses. It follows the story of Princess Genevieve and her eleven sisters as they go to a magical world where their wishes come true."
    },
    {
        title: "Barbie Fairytopia: Magic of the Rainbow",
        year: 2007,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/1/13/Barbie_Fairytopia_Magic_of_the_Rainbow_Digital_Copy.png",
        description: "This movie is the sequel to Barbie Fairytopia and Barbie Fairytopia: Mermaidia."
    },
    {
        title: "Barbie as The Island Princess",
        year: 2007,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/d/d8/Barbie_as_The_Island_Princess_Digital_Copy.png",
        description: "he film follows Ro, a girl who grew up on an island, only inhabited by animals before being found by other humans and taken to civilization."
    },
    {
        title: "Barbie: Mariposa and Her Butterfly Fairy Friends,",
        year: 2008,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/c/cb/Barbie_Mariposa_and_her_Butterfly_Fairy_Friends_Digital_Copy.png",
        description: "The film is a spin-off of the Barbie: Fairytopia series, though not a direct sequel. Elina tells her puffball Bibble about a butterfly fairy named Mariposa. Mariposa goes on a quest to save Queen Marabella and free Flutterfield from the evil fairy Henna and the Skeezites."
    },
    {
        title: "Barbie & The Diamond Castle",
        year: 2008,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/f/f2/Barbie_%26_The_Diamond_Castle_Digital_Copy.png",
        description: "It is a musical fairy tale about two girls named Princess Liana, played by Barbie and Princess Alexa, played by Teresa. It is a story about friendship and music."
    },
    {
        title: "Barbie in A Christmas Carol",
        year: 2008,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/5/51/14-biacc-poster-ev.jpg",
        description: "The film follows the story of Eden Starling, a spoiled singing diva living in Victorian London who hates Christmas but everything changes when she realized the value of it."
    },
    {
        title: "Barbie Presents Thumbelina",
        year: 2009,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/5/54/Barbie_Presents_Thumbelina_Digital_Copy.png",
        description: "The film is a modern retelling of the fairy tale Thumbelina by Hans Christian Andersen. The film centers around Thumbelina, a Twillerbee who lives in a patch of wildflowers, in harmony with nature."
    },
    {
        title: "Barbie and The Three Musketeers",
        year: 2009,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/a/ab/16-0.jpg",
        description: "It is based on the novel The Three Musketeers by Alexander Dumas. It is the last Barbie movie to be based on the plot of classic literature, a ballet, or a fairytale."
    },
    {
        title: "Barbie in A Mermaid Tale",
        year: 2010,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/b/b6/Barbie_in_A_Mermaid_Tale_Digital_Copy.png",
        description: "The film follows the story of Princess Merliah, a half-human and half-mermaid who tries to rescue her mother and her under water kingdom. This movie was followed by a sequel Barbie in A Mermaid Tale 2."
    },
    {
        title: "Barbie: A Fashion Fairytale ",
        year: 2010,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/1/17/18-baff-poster-ev.jpg",
        description: "The film follows the adventure of Barbie as she visits her aunt, a fashion designer, in Paris, and has a magical experience."
    },
    {
        title: "Barbie: A Fairy Secret",
        year: 2011,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/3/33/Barbie_A_Fairy_Secret_Digital_Copy.png",
        description: "When Ken is kidnapped by fairies, Barbie and her rival Raquelle have to team up to save him from being married to a fairy princess and being trapped in a fairy world forever."
    },
    {
        title: "Barbie: Princess Charm School",
        year: 2011,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/b/b2/Barbie_Princess_Charm_School_Digital_Copy.png",
        description: "The film follows the story of Blair Willows, a poor girl living in the kingdom of Gardania, who wins an annual lottery to attend a school for princesses: Princess Charm School."
    },
    {
        title: "Barbie: A Perfect Christmas",
        year: 2011,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/0/02/Barbie_A_Perfect_Christmas_Digital_Copy.png",
        description: "The movie is a musical and it follows Barbie and her younger sisters, Skipper, Stacie and Chelsea, as they discover what makes Christmas perfect."
    },
    {
        title: "Barbie in A Mermaid Tale 2",
        year: 2012,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/d/d6/Barbie_in_A_Mermaid_Tale_2_Digital_Copy.png",
        description: "This movie is the sequel to Barbie in A Mermaid Tale. The film continues the journey of Princess Merliah in a new mermaid adventure in order to save her kingdom from her evil aunt."
    },
    {
        title: "Barbie: The Princess & the Popstar",
        year: 2012,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/0/0a/Barbie_The_Princess_%26_The_Popstar_Digital_Copy.png",
        description: "Barbie plays a princess named Victoria and a popstar named Keira, who magically switch places before realizing it is best to be themselves."
    },
    {
        title: "Barbie in the Pink Shoes",
        year: 2013,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/7/72/Barbie_in_The_Pink_Shoes_Digital_Copy.png",
        description: "The film follows the story of young ballet dancer named Kristyn. This is the last Barbie movie to feature or be based upon fairy tales, ballet/plays, or classic literature."
    },
    {
        title: "Barbie: Mariposa & the Fairy Princess",
        year: 2013,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/7/77/25-bmatfp-poster-ev.jpg",
        description: " It is the 5th and final Barbie: Fairytopia movie. The film continues the journey of Mariposa with her new friend Princess Catania in a new adventure."
    },
    {
        title: "Barbie & Her Sisters in A Pony Tale",
        year: 2013,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/0/03/Barbie_%26_Her_Sisters_in_A_Pony_Tale_Cover.jpeg",
        description: "he movie follows Barbie and her sisters Skipper, Stacie and Chelsea as they visit a horse-riding academy in the Alps, and Barbie encounters a legendary herd of horses."
    },
    {
        title: "Barbie: The Pearl Princess",
        year: 2014,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/e/e9/27-btpp-poster-ev.jpg",
        description: " Barbie plays Lumina, a mermaid princess who has the power to control pearls."
    },
    {
        title: "Barbie and the Secret Door",
        year: 2014,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/9/9f/28-0.jpg",
        description: "It's the ultimate fairytale musical! Barbie stars as Alexa, a shy princess who discovers a secret door in her kingdom and enters a whimsical land filled with magical creatures and surprises."
    },
    {
        title: "Barbie in Princess Power",
        year: 2015,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/b/bc/Barbie_in_Princess_Power_DVD_Cover.jpeg",
        description: "The film follows Princess Kara of Windemere, who, after being kissed by a magical butterfly, is imbued with super powers and begins saving people under the alias Super Sparkle."
    },
    {
        title: "Barbie in Rock 'N Royals",
        year: 2015,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/b/bb/Rock_Royals_Cover.png",
        description: "The soundtrack was released in August on Amazon and is available now on iTunes. This is the last movie to feature protagonists not named Barbie."
    },
    {
        title: "Barbie & Her Sisters in The Great Puppy Adventure",
        year: 2015,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/c/cb/Great_Puppy_Adventure.png",
        description: "Barbie and her sisters, Skipper, Stacie and Chelsea, and their adorable new puppy friends find unexpected mystery and adventure when they return to their hometown of Willows."
    },
    {
        title: "Barbie: Spy Squad",
        year: 2016,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/3/36/Bss-beaas-0-1.png",
        description: "This is the first Barbie film featuring Erica Lindbeck as the new voice of Barbie, as well as the last film under the name of Mattel Playground Productions."
    },
    {
        title: "Barbie: Star Light Adventure",
        year: 2016,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/0/05/Barbie_Star_Light_Adventure.jpg",
        description: "The soundtrack was released on August 26, 2016. Despite using Barbie as the protagonist's name, Star Light Adventure marks the last movie not about the Roberts family's personal life. It is also the last one to take place in a fantasy world, even though future movies have mild fantasy elements in modern settings."
    },
    {
        title: "Barbie & Her Sisters in A Puppy Chase",
        year: 2016,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/1/17/Barbie_%26_Her_Sisters_in_a_Puppy_Chase_Cover.jpg",
        description: "Barbie and her sisters go to an island so that Chelsea can be in a dance competition. They bring their puppies with them, but the puppies go missing. Barbie and her sisters have to work together to find the puppies before Chelsea's competition starts."
    },
    {
        title: "Barbie: Video Game Hero",
        year: 2017,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/4/48/X6.jpg",
        description: "When Barbie magically gets pulled into her favorite video game, she is excited to see she's transformed into a fun roller-skating character. In the game, she meets Cutie, the lovable cloud-shaped friend, and Bella, the roller-skating princess."
    },
    {
        title: "Barbie: Dolphin Magic",
        year: 2017,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/c/c6/Barbie_Dolphin_Magic_Poster.jpg",
        description: "The movie follows Barbie and her sisters while they visit Ken during his marine biology internship at a research facility. Barbie meets a mermaid named Isla, who is trying to rescue her dolphin friend from the facility."
    },
    {
        title: "Barbie: Princess Adventure",
        year: 2020,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/b/b5/Princess_Adventure_Poster.jpg",
        description: "The movie follows Barbie Dreamhouse Adventures. Barbie and an identical girl named Amelia switch places for a week so they can experience each other's lives."
    },
    {
        title: "Barbie & Chelsea: The Lost Birthday",
        year: 2021,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/a/a3/Barbie_%26_Chelsea_The_Lost_Birthday_Poster.jpg",
        description: "Barbie & Chelsea The Lost Birthday, tells the story of Chelsea, Barbie’s precocious youngest sister, and the rest of the Roberts family as they set sail on an adventure cruise for her seventh birthday. "
    },
    {
        title: "Barbie: Big City, Big Dreams",
        year: 2021,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/4/4d/Barbie_Big_City_Big_Dreams_Key_Art.jpg",
        description: "Discover double the singing and double the fun in this all-new musical movie Barbie Big City, Big Dreams. Barbie swaps the sunny shores of Malibu for the bright lights of Broadway to attend an excusive summer performing arts program and meets... Barbie! Fast friends."
    },
    {
        title: "Barbie: Mermaid Power",
        year: 2022,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/9/94/Barbie_Mermaid_Power_Final_Artwork.jpg",
        description: "Barbie and Barbie are summoned by Isla (from Dolphin Magic) to compete to be the underwater Power Keeper in a series of challenges designed to find their inner powers."
    },
    {
        title: "Barbie: Epic Road Trip ",
        year: 2022,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/0/0c/Barbie_Epic_Road_Trip_Poster.jpg",
        description: "In this interactive adventure, Barbie goes on a cross-country trek with friends and makes big decisions about the future. Which dream will she choose?"
    },
    {
        title: "Barbie: Skipper and the Big Babysitting Adventure ",
        year: 2023,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/4/46/Barbie_Skipper_and_the_Big_Babysitting_Adventure_Box_Shot.png",
        description: "Barbie's younger sister Skipper is a babysitting expert, but when her babysitting business hits a snag, she takes a summer job at a water park and tries out different first jobs with some new friends. "
    },
    {
        title: "Barbie and Stacie to the Rescue",
        year: 2024,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/6/61/Barbie_and_Stacie_to_the_Rescue_POSTER.jpg",
        description: "Barbie And Stacie To The Rescue coming March 14th, 2024! The Roberts family heads to Wisconsin for a hot air balloon festival where Stacie finds herself caught in between – too young for the adult activities and too old to play with the little kids."
    },
    {
        title: "Barbie & Teresa: Recipe for Friendship",
        year: 2025,
        image: "https://static.wikia.nocookie.net/barbie-movies/images/7/77/Barbie_%26_Teresa_Recipe_for_Friendship_Soundtrack.jpg",
        description: "Barbie Brooklyn Roberts, Barbie Malibu Roberts, and best friends Teresa and Nikki head to the Big Apple for spring break to help with the launch of Teresa's cousin's new restaurant."
    },
  ];
  
  export default barbieMovies;
  