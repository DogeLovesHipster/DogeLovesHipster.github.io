const references = [
    {
        // Conner, R.N., Sáenz, D., & Rudolph, D.C. (2004). The red-cockaded woodpecker: interactions with fire, snags, fungi, rat snakes and pileated woodpeckers. Texas Journal of Science, 56(4), 415-426.
        author: "Conner, R.N., Sáenz, D., & Rudolph, D.C.",
        title: "The red-cockaded woodpecker: interactions with fire, snags, fungi, rat snakes and pileated woodpeckers",
        journal: "Texas Journal of Science",
        volume: "56(4)",
        pages: "415-426",
        year: 2004,
        url: "https://www.fs.usda.gov/research/treesearch/21066",
      },
      {
        // Cox, J.A., Engstrom, R.T., Breininger, D.R., & Ragheb, E.L. (2020). Interpreting smoke signals: Fire ecology and land management for four federally listed birds. Frontiers in Ecology and Evolution, 8, 267. doi: 10.3389/fevo.2020.00267
        author: "Cox, J.A., Engstrom, R.T., Breininger, D.R., & Ragheb, E.L.",
        title: "Interpreting smoke signals: Fire ecology and land management for four federally listed birds",
        journal: "Frontiers in Ecology and Evolution",
        volume: "8",
        pages: "267",
        year: 2020,
        doi: "10.3389/fevo.2020.00267",
      },
      {
        // Vierling, K.T., & Gentry, D.J. (2008). Red-headed woodpecker density and productivity in relation to time since fire in burned pine forests. Fire Ecology, 4, 15-25. https://doi.org/10.4996/fireecology.0402015
        author: "Vierling, K.T., & Gentry, D.J.",
        title: "Red-headed woodpecker density and productivity in relation to time since fire in burned pine forests",
        journal: "Fire Ecology",
        volume: "4",
        pages: "15-25",
        year: 2008,
        doi: "10.4996/fireecology.0402015",
      },
  {
    // Allen, J.C., Krieger, S.M., Walters, J., & Collazo, J.A. (2006). Associations of breeding birds with fire-influenced and riparian-upland gradients in a longleaf pine ecosystem. The Auk, 123(4), 1110-1128. https://doi.org/10.1093/auk/123.4.1110
    author: "Allen, J.C., Krieger, S.M., Walters, J., & Collazo, J.A.",
    title: "Associations of breeding birds with fire-influenced and riparian-upland gradients in a longleaf pine ecosystem",
    journal: "The Auk",
    volume: "123(4)",
    pages: "1110-1128",
    year: 2006,
    doi: "10.1093/auk/123.4.1110",
  },
  {
    // Hutto, R.L., Conway, C.J., Saab, V.A., & Walters, J. (2008). What constitutes a natural fire regime? Insight from the ecology and distribution of coniferous forest birds in North America. Fire Ecology, 4, 115-132. https://doi.org/10.4996/fireecology.0402115
    author: "Hutto, R.L., Conway, C.J., Saab, V.A., & Walters, J.",
    title: "What constitutes a natural fire regime? Insight from the ecology and distribution of coniferous forest birds in North America",
    journal: "Fire Ecology",
    volume: "4",
    pages: "115-132",
    year: 2008,
    doi: "10.4996/fireecology.0402115",
  },
  {
    // Conner, R.N., Rudolph, D.C., Kulhavy, D., & Snow, A.E. (1991). Causes of mortality of red-cockaded woodpecker cavity trees. Journal of Wildlife Management, 55(3), 531-537.
    author: "Conner, R.N., Rudolph, D.C., Kulhavy, D., & Snow, A.E.",
    title: "Causes of mortality of red-cockaded woodpecker cavity trees",
    journal: "Journal of Wildlife Management",
    volume: "55(3)",
    pages: "531-537",
    year: 1991,
    url: "https://www.fs.usda.gov/research/treesearch/1276#",
  },
  {
    // Fullerton, M.R., Walters, J., Will, R.E., & Loss, S.R. (2021). Interannual climate variation influences nest initiation date and nest productivity of the red-cockaded woodpecker at the northwestern edge of its range. Ornithological Applications, 123(2), 1-17. https://doi.org/10.1093/ornithapp/duab013
    author: "Fullerton, M.R., Walters, J., Will, R.E., & Loss, S.R.",
    title: "Interannual climate variation influences nest initiation date and nest productivity of the red-cockaded woodpecker at the northwestern edge of its range",
    journal: "Ornithological Applications",
    volume: "123(2)",
    pages: "1-17",
    year: 2021,
    doi: "10.1093/ornithapp/duab013",
  },
  {
    // Stillman, A.N., Siegel, R.B., Wilkerson, R.L., Johnson, M., & Tingley, M.W. (2019). Age-dependent habitat relationships of a burned forest specialist emphasise the role of pyrodiversity in fire management. Journal of Applied Ecology, 56, 880-890. https://doi.org/10.1111/1365-2664.13328
    author: "Stillman, A.N., Siegel, R.B., Wilkerson, R.L., Johnson, M., & Tingley, M.W.",
    title: "Age-dependent habitat relationships of a burned forest specialist emphasise the role of pyrodiversity in fire management",
    journal: "Journal of Applied Ecology",
    volume: "56",
    pages: "880-890",
    year: 2019,
    doi: "10.1111/1365-2664.13328",
  },
  {
    // DeMay, S.M., & Walters, J. (2019). Variable effects of a changing climate on lay dates and productivity across the range of the red-cockaded woodpecker. The Condor, 121(4), 1-14. https://doi.org/10.1093/condor/duz048
    author: "DeMay, S.M., & Walters, J.",
    title: "Variable effects of a changing climate on lay dates and productivity across the range of the red-cockaded woodpecker",
    journal: "The Condor",
    volume: "121(4)",
    pages: "1-14",
    year: 2019,
    doi: "10.1093/condor/duz048",
  },
  {
    // Richard N. Conner, Daniel Saenz, D. Craig Rudolph, William G. Ross, David L. Kulhavy, Robert N. Coulson, Does Red-Cockaded Woodpecker Excavation of Resin Wells Increase Risk of Bark Beetle Infestation of Cavity Trees?, The Auk, Volume 118, Issue 1, 1 January 2001, Pages 219–224, https://doi.org/10.1093/auk/118.1.219
    author: "Lovette, I.J., & Bermingham, E.",
    title: "Does Red-Cockaded Woodpecker Excavation of Resin Wells Increase Risk of Bark Beetle Infestation of Cavity Trees?",
    journal: "The Auk",
    volume: "118",
    pages: "219-224",
    year: 2001,
    doi: "10.1093/auk/118.1.219",
  },
  {
    author: "Jackson, J.A., Poole, A.K., & Gill, F.B.",
    title: "Red-cockaded Woodpecker (Picoides borealis)",
    journal: "The Birds of North America Online",
    volume: "20",
    year: 1994,
    url: "https://birdsoftheworld.org/bow/species/rebpil1/cur/introduction",
  },
  {
    // Robert M. Mengel, Jerome A. Jackson, Geographic Variation of the Red-Cockaded Woodpecker, The Condor, Volume 79, Issue 3, 1 July 1977, Pages 349–355, https://doi.org/10.2307/1368013
    author: "Mengel, R.M., & Jackson, J.A.",
    title: "Geographic variation of the red-cockaded woodpecker",
    journal: "The Condor",
    volume: "79",
    pages: "349-355",
    year: 1977,
    doi: "10.2307/1368013",
  },
  { // Engstrom, R. T., & Evans, G. W. (1990). Hurricane damage to Red-cockaded Woodpecker (Picoides borealis) cavity trees. Auk, 107(3), 608-610. https://sora.unm.edu/node/24887
    author: "Frei, B., Smith, K.G., Withgott, J.H., Rodewald, P.G., Pyle, P., & Patten, M.A.",
    title: "Red-headed Woodpecker (Melanerpes erythrocephalus)",
    journal: "Birds of the World",
    year: 2020,
    url: "https://birdsoftheworld.org/bow/species/rehwoo/cur/introduction",
},
  {
    author: "Cornell Lab of Ornithology",
    title: "Red-cockaded Woodpecker",
    year: 2024,
    url: "https://www.allaboutbirds.org/guide/Red-cockaded_Woodpecker/id",
  },
  {
    // David L. Leonard, Roy S. DeLotelle, The Red-cockaded Woodpecker: Surviving in a Fire-Maintained Ecosystem, The Auk, Volume 120, Issue 4, 1 October 2003, Pages 1201–1205, https://doi.org/10.1093/auk/120.4.1201
    author: "Conner, E.N., Rudolph, C., & Walters, J.",
    title: "The Red-cockaded Woodpecker: Surviving in a Fire-Maintained Ecosystem",
    journal: "The Auk",
    volume: "120",
    pages: "1201-1205",
    year: 2003,
    doi: "10.1093/auk/120.4.1201",
  },
];

export default references;
