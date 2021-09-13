export const categories = [
  {
    id: 1,
    name: "Bakery",
    photo_url:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DR_xDiShk",
    subcategories: [
      {
        id: 1,
        name: "Cakes",
        image_url:
          "https://cakesbyeudie.com/wp-content/uploads/2021/03/Fresh-Strawberry-Cake-with-Strawberry-Frosting-3.jpg",
      },
      {
        id: 2,
        name: "Cupcakes",
        image_url:
          "https://food-images.files.bbci.co.uk/food/recipes/cupcakes_93722_16x9.jpg",
      },
    ],
    isChildFriendly: true,
  },
  {
    id: 2,
    name: "Clothing and Apparel",
    isChildFriendly: true,
    photo_url:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DR_xDiShk",
    subcategories: [
      {
        id: 3,
        name: "Crochet tops",
        image_url:
          "https://i.pinimg.com/originals/3c/6f/d4/3c6fd456a6e23c58d7b9776ed67a7f0b.jpg",
      },
      {
        id: 4,
        name: "Hats",
        image_url:
          "https://www.thesprucecrafts.com/thmb/LxJD8wRG9KGOSudkwchOR7sPIN0=/1936x1936/smart/filters:no_upscale()/ica-HnyMBlDdQWc-unsplash-0794e46c827346f8bc86de026125e2e1.jpg",
      },
      {
        id: 5,
        name: "Scarfs",
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VCfsRFm_0ErKLAwPSo6Nr6bA7WQMQXBBucxFzVPHI0U5lR45E95vcHMczbwmem6Dim4&usqp=CAU",
      },
    ],
  },
  {
    id: 3,
    name: "Shoes",
    isChildFriendly: true,
    photo_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e725107a3d7041389f94ab220123fbcb_9366/Bravada_Shoes_Black_FV8085_01_standard.jpg",
    subcategories: [
      {
        id: 6,
        name: "Sneakers",
        image_url:
          "https://i.roamcdn.net/hz/pi/listing-thumb-543w/3f9d3d5ec3b2b6a522c1fcfa52a904be/-/horizon-files-prod/pi/picture/q402q2e/40ec9b708c91e64b1824d7211a38bb8cc560a916.jpeg",
      },
      { id: 7, name: "Boots" },
    ],
  },
  {
    id: 4,
    name: "Wines and Spirits",
    isChildFriendly: false,
    photo_url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e725107a3d7041389f94ab220123fbcb_9366/Bravada_Shoes_Black_FV8085_01_standard.jpg",
    subcategories: [
      {
        id: 8,
        name: "Beer",
        image_url:
          "https://www.prada.com/content/dam/pradanux_products/1/1T2/1T255M/3L09F0002/1T255M_3L09_F0002_F_B055_SLR.png",
      },
    ],
  },
];

const productsArray = [
  {
    id: 1,
    categoryID: 2,
    shop: 1,
    title: "Vanilla",
    photo_url:
      "https://hips.hearstapps.com/delish/assets/18/07/1518475314-vanilla-cupcake-horizontal-.jpg",
    photosArray: [
      "https://hips.hearstapps.com/delish/assets/18/07/1518475314-vanilla-cupcake-horizontal-.jpg",
      "https://thegardeningfoodie.com/wp-content/uploads/2019/01/IMG_20190129_165644.jpg",
    ],
    time: "45",
    customs: [
      {
        id: 1,
        name: "Options",
        options: [
          {
            id: 1,
            label: "Classic",
            image:
              "https://hips.hearstapps.com/delish/assets/18/07/1518475314-vanilla-cupcake-horizontal-.jpg",
            price: { amount: 200, prefix: "Ksh" },
            unit: { quantity: 6, text: "PCS" },
          },
          {
            id: 2,
            label: "Flat",
            image:
              "https://thegardeningfoodie.com/wp-content/uploads/2019/01/IMG_20190129_165644.jpg",
            price: { amount: 200, prefix: "Ksh" },
            unit: { quantity: 6, text: "PCS" },
          },
        ],
      },
    ],
    description: "-- Tasty, vanilla flavored cupcakes.",
  },
  {
    id: 3,
    categoryID: 2,
    shop: 1,
    title: "Strawberry",
    price: { amount: 200, prefix: "Ksh" },
    unit: { quantity: 6, text: "PCS" },
    photo_url:
      "https://www.rainbownourishments.com/wp-content/uploads/2021/02/vegan-strawberry-cupcakes-1..jpg",
    photosArray: [
      "https://www.rainbownourishments.com/wp-content/uploads/2021/02/vegan-strawberry-cupcakes-1..jpg",
      "https://www.livewellbakeoften.com/wp-content/uploads/2016/02/Chocolate-Covered-Strawberry-Cupcakes-Recipe-7.jpg",
      "https://www.errenskitchen.com/wp-content/uploads/2018/06/strawberries-and-cream-cupcakes3.jpg",
    ],
    time: "45",
    customs: [
      {
        id: 1,
        name: "Options",
        options: [
          {
            id: 1,
            label: "Classic",
            image:
              "https://www.rainbownourishments.com/wp-content/uploads/2021/02/vegan-strawberry-cupcakes-1..jpg",
            price: { amount: 200, prefix: "Ksh" },
            unit: { quantity: 6, text: "PCS" },
          },
          {
            id: 2,
            label: "Flat",
            image:
              "https://www.livewellbakeoften.com/wp-content/uploads/2016/02/Chocolate-Covered-Strawberry-Cupcakes-Recipe-7.jpg",
            price: { amount: 200, prefix: "Ksh" },
            unit: { quantity: 6, text: "PCS" },
          },
          {
            id: 3,
            label: "Fordant Cupcakes",
            image:
              "https://www.errenskitchen.com/wp-content/uploads/2018/06/strawberries-and-cream-cupcakes3.jpg",
            price: { amount: 200, prefix: "Ksh" },
            unit: { quantity: 6, text: "PCS" },
          },
        ],
      },
    ],
    description: "-- Product description goes here.",
  },
  {
    id: 4,
    categoryID: 1,
    shop: 1,
    title: "Forest",
    photo_url:
      "https://media.istockphoto.com/photos/black-forest-cake-picture-id182895267?k=20&m=182895267&s=612x612&w=0&h=9q-t8Dn3OfyFfoVHjADTtyMzjjYyR7Vm_F1e7FO7iQE=",
    photosArray: [
      "https://media.istockphoto.com/photos/black-forest-cake-picture-id182895267?k=20&m=182895267&s=612x612&w=0&h=9q-t8Dn3OfyFfoVHjADTtyMzjjYyR7Vm_F1e7FO7iQE=",
      "http://cdn.shopify.com/s/files/1/0116/2008/9956/products/FShreemithai15-01-2021-431lowrescopy_800x.jpg?v=1611572219",
      "https://www.mycakeschool.com/images/2019/06/Black-Forest-Cake-from-Scratch-featured-image-.jpg",
    ],
    time: "45",
    customs: [
      {
        id: 1,
        name: "Colors",
        options: [
          {
            id: 1,
            label: "Black",
            image:
              "https://media.istockphoto.com/photos/black-forest-cake-picture-id182895267?k=20&m=182895267&s=612x612&w=0&h=9q-t8Dn3OfyFfoVHjADTtyMzjjYyR7Vm_F1e7FO7iQE=",
            price: { amount: 1000, prefix: "Ksh" },
            unit: { quantity: 1, text: "KG" },
          },
          {
            id: 2,
            label: "White",
            image:
              "http://cdn.shopify.com/s/files/1/0116/2008/9956/products/FShreemithai15-01-2021-431lowrescopy_800x.jpg?v=1611572219",
            price: { amount: 1000, prefix: "Ksh" },
            unit: { quantity: 1, text: "KG" },
          },
        ],
      },
    ],
    description: "-- Product description goes here.",
  },
  {
    id: 5,
    categoryID: 1,
    shop: 1,
    title: "Regular",
    photo_url:
      "https://www.theflavorbender.com/wp-content/uploads/2018/03/Vanilla-Cake-3253-780x1169.jpg",
    photosArray: [
      "https://www.theflavorbender.com/wp-content/uploads/2018/03/Vanilla-Cake-3253-780x1169.jpg",
      "https://letocaffe.co.uk/uk_uploads/2016/12/leto-cakes01609.jpg",
      "https://5.imimg.com/data5/AX/BS/AH/SELLER-81934396/chocolate-cake-500x500.jpg",
    ],
    time: "45",
    customs: [
      {
        id: 1,
        name: "Flavors",
        options: [
          {
            id: 1,
            label: "Vanilla",
            image:
              "https://www.theflavorbender.com/wp-content/uploads/2018/03/Vanilla-Cake-3253-780x1169.jpg",
            price: { amount: 1200, prefix: "Ksh" },
            unit: { quantity: 1, text: "KG" },
          },
          {
            id: 2,
            label: "Passion",
            image:
              "https://letocaffe.co.uk/uk_uploads/2016/12/leto-cakes01609.jpg",
            price: { amount: 1200, prefix: "Ksh" },
            unit: { quantity: 1, text: "KG" },
          },
          ,
          {
            id: 2,
            label: "Chocolate",
            image:
              "https://5.imimg.com/data5/AX/BS/AH/SELLER-81934396/chocolate-cake-500x500.jpg",
            price: { amount: 1200, prefix: "Ksh" },
            unit: { quantity: 1, text: "KG" },
          },
        ],
      },
    ],
    description: "-- Product description goes here.",
  },
  {
    id: 6,
    categoryID: 1,
    shop: 1,
    title: "Velvet",
    photo_url:
      "https://www.gortsa.com/cache/large/product/18495/BiH8etfcfWf25MCUmQHQkZGCasixrjlnEpDq611F.jpeg",
    photosArray: [
      "https://www.gortsa.com/cache/large/product/18495/BiH8etfcfWf25MCUmQHQkZGCasixrjlnEpDq611F.jpeg",
      "https://cakefarm.in/wp-content/uploads/2020/06/1.jpg",
    ],
    time: "45",
    customs: [
      {
        id: 1,
        name: "Flavors",
        options: [
          {
            id: 1,
            label: "Red",
            image:
              "https://www.gortsa.com/cache/large/product/18495/BiH8etfcfWf25MCUmQHQkZGCasixrjlnEpDq611F.jpeg",
            price: { amount: 1200, prefix: "Ksh" },
            unit: { quantity: 1, text: "KG" },
          },
          {
            id: 2,
            label: "Purple",
            image: "https://cakefarm.in/wp-content/uploads/2020/06/1.jpg",
            price: { amount: 1200, prefix: "Ksh" },
            unit: { quantity: 1, text: "KG" },
          },
        ],
      },
    ],
    description: "-- Product description goes here.",
  },
  {
    id: 7,
    categoryID: 4,
    shop: 3,
    title: "Pattern Hats",
    photo_url:
      "https://sarahmaker.com/wp-content/uploads/2020/11/crochet-ribbed-beanie-7-683x1024.jpg.webp",
    photosArray: [
      "https://sarahmaker.com/wp-content/uploads/2020/11/crochet-ribbed-beanie-7-683x1024.jpg.webp",
      "https://crochetdreamz.com/wp-content/uploads/2019/09/How-to-Crochet-a-Hat-0105.jpg",
      "https://www.thesprucecrafts.com/thmb/LxJD8wRG9KGOSudkwchOR7sPIN0=/1936x1936/smart/filters:no_upscale()/ica-HnyMBlDdQWc-unsplash-0794e46c827346f8bc86de026125e2e1.jpg",
    ],
    time: "45",
    customs: [
      {
        id: 1,
        name: "Patterns",
        options: [
          {
            id: 1,
            label: "Option One",
            image:
              "https://sarahmaker.com/wp-content/uploads/2020/11/crochet-ribbed-beanie-7-683x1024.jpg.webp",
            price: { amount: 300, prefix: "Ksh" },
            unit: { quantity: 1, text: "PC" },
          },
          {
            id: 2,
            label: "Option two",
            image:
              "https://crochetdreamz.com/wp-content/uploads/2019/09/How-to-Crochet-a-Hat-0105.jpg",
            price: { amount: 300, prefix: "Ksh" },
            unit: { quantity: 1, text: "PC" },
          },
          {
            id: 3,
            label: "Option three",
            image:
              "https://www.thesprucecrafts.com/thmb/LxJD8wRG9KGOSudkwchOR7sPIN0=/1936x1936/smart/filters:no_upscale()/ica-HnyMBlDdQWc-unsplash-0794e46c827346f8bc86de026125e2e1.jpg",
            price: { amount: 300, prefix: "Ksh" },
            unit: { quantity: 1, text: "PC" },
          },
        ],
      },
    ],
    description: "-- Product description goes here.",
  },
  {
    id: 8,
    categoryID: 3,
    shop: 3,
    title: "Bralet",
    photo_url:
      "https://static.pullandbear.net/2/photos/2021/V/0/1/p/4242/309/615/4242309615_1_1_3.jpg?t=1624265058184",
    photosArray: [
      "https://3.bp.blogspot.com/-SS7_VNtcURw/Vw6bQgdZqxI/AAAAAAAAEF4/8YXQ9kbk9BI1hHLbfTMgcHO2tFHI3zqjQCLcB/s1600/crochettop33.jpg",
      "https://static.pullandbear.net/2/photos/2021/V/0/1/p/4242/309/615/4242309615_1_1_3.jpg?t=1624265058184",
      "https://i.pinimg.com/originals/6e/63/15/6e631570af5f4ef8ca2b23f7b16ae505.jpg",
    ],
    time: "45",
    customs: [
      {
        id: 1,
        name: "Patterns",
        options: [
          {
            id: 1,
            label: "Option One",
            image:
              "https://3.bp.blogspot.com/-SS7_VNtcURw/Vw6bQgdZqxI/AAAAAAAAEF4/8YXQ9kbk9BI1hHLbfTMgcHO2tFHI3zqjQCLcB/s1600/crochettop33.jpg",
            price: { amount: 450, prefix: "Ksh" },
            unit: { quantity: 1, text: "PC" },
          },
          {
            id: 2,
            label: "Option two",
            image:
              "https://static.pullandbear.net/2/photos/2021/V/0/1/p/4242/309/615/4242309615_1_1_3.jpg?t=1624265058184",
            price: { amount: 450, prefix: "Ksh" },
            unit: { quantity: 1, text: "PC" },
          },
          {
            id: 3,
            label: "Option three",
            image:
              "https://i.pinimg.com/originals/6e/63/15/6e631570af5f4ef8ca2b23f7b16ae505.jpg",
            price: { amount: 450, prefix: "Ksh" },
            unit: { quantity: 1, text: "PC" },
          },
        ],
      },
    ],
    description: "-- Product description goes here.",
  },
  {
    id: 9,
    categoryID: 3,
    shop: 3,
    title: "Tshirt",
    photo_url:
      "https://www.cashmeredandelions.com/wp-content/uploads/2019/07/Summer-Berry-Crochet-Top-new.jpg",
    photosArray: [
      "https://www.cashmeredandelions.com/wp-content/uploads/2019/07/Summer-Berry-Crochet-Top-new.jpg",
      "https://www.cashmeredandelions.com/wp-content/uploads/2019/07/Summer-Berry-Crochet-Top-new.jpg",
    ],
    time: "45",
    customs: [
      {
        id: 1,
        name: "Patterns",
        options: [
          {
            id: 1,
            label: "Option One",
            image:
              "https://www.cashmeredandelions.com/wp-content/uploads/2019/07/Summer-Berry-Crochet-Top-new.jpg",
            price: { amount: 800, prefix: "Ksh" },
            unit: { quantity: 1, text: "PC" },
          },
          {
            id: 2,
            label: "Option two",
            image:
              "https://www.cashmeredandelions.com/wp-content/uploads/2019/07/Summer-Berry-Crochet-Top-new.jpg",
            price: { amount: 800, prefix: "Ksh" },
            unit: { quantity: 1, text: "PC" },
          },
        ],
      },
    ],
    description: "-- Product description goes here.",
  },
  {
    id: 10,
    categoryID: 5,
    shop: 3,
    title: "Scarfs",
    photo_url:
      "https://www.anniedesigncrochet.com/wp-content/uploads/2019/08/20190808_100156.jpg",
    photosArray: [
      "https://www.anniedesigncrochet.com/wp-content/uploads/2019/08/20190808_100156.jpg",
      "https://www.thesprucecrafts.com/thmb/ZgffarUu8xyofMui2OWeJ5W_ujI=/2800x1867/filters:fill(auto,1)/EasyCrochetScarf1-5c1419dbc9e77c00013f575f.jpg",
      "https://www.makeandtakes.com/wp-content/uploads/Wrapping-a-Crochet-Scarf.jpg",
    ],
    time: "45",
    customs: [
      {
        id: 1,
        name: "Patterns",
        options: [
          {
            id: 1,
            label: "Option One",
            image:
              "https://www.anniedesigncrochet.com/wp-content/uploads/2019/08/20190808_100156.jpg",
            price: { amount: 300, prefix: "Ksh" },
            unit: { quantity: 1, text: "PC" },
          },
          {
            id: 2,
            label: "Option two",
            image:
              "https://www.thesprucecrafts.com/thmb/ZgffarUu8xyofMui2OWeJ5W_ujI=/2800x1867/filters:fill(auto,1)/EasyCrochetScarf1-5c1419dbc9e77c00013f575f.jpg",
            price: { amount: 300, prefix: "Ksh" },
            unit: { quantity: 1, text: "PC" },
          },
          {
            id: 3,
            label: "Option three",
            image:
              "https://www.makeandtakes.com/wp-content/uploads/Wrapping-a-Crochet-Scarf.jpg",
            price: { amount: 300, prefix: "Ksh" },
            unit: { quantity: 1, text: "PC" },
          },
        ],
      },
    ],
    description: "-- Product description goes here.",
  },
  {
    id: 11,
    categoryID: 6,
    shop: 5,
    title: "Vans",
    photo_url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1610416577-vans-1610416571.jpg",
    photosArray: [
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1610416577-vans-1610416571.jpg",
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F04%2Fdover-street-market-vans-old-skool-slip-on-collaboration-9.jpg?q=75&w=800&cbr=1&fit=max",
      "https://cdn.ccs.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/v/a/vans-old-skool-pro-shoes-dark-olive-white-1.1506662774.jpg",
    ],
    time: "45",
    customs: [
      {
        id: 1,
        name: "Options",
        options: [
          {
            id: 1,
            label: "Option One",
            image:
              "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1610416577-vans-1610416571.jpg",
            price: { amount: 1200, prefix: "Ksh" },
            unit: { quantity: 1, text: "Pair" },
          },
          {
            id: 2,
            label: "Option Two",
            image:
              "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F04%2Fdover-street-market-vans-old-skool-slip-on-collaboration-9.jpg?q=75&w=800&cbr=1&fit=max",
            price: { amount: 1200, prefix: "Ksh" },
            unit: { quantity: 1, text: "Pair" },
          },
          {
            id: 3,
            label: "Option Three",
            image:
              "https://cdn.ccs.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/v/a/vans-old-skool-pro-shoes-dark-olive-white-1.1506662774.jpg",
            price: { amount: 1200, prefix: "Ksh" },
            unit: { quantity: 1, text: "Pair" },
          },
        ],
      },
    ],
    description: "-- Product description goes here.",
  },
  {
    id: 12,
    categoryID: 7,
    shop: 5,
    title: "Boots",
    photo_url:
      "https://pictures-kenya.jijistatic.com/1719114_img-20190719-wa0050_1224x1224.jpg",
    photosArray: [
      "https://pictures-kenya.jijistatic.com/1719114_img-20190719-wa0050_1224x1224.jpg",
    ],
    time: "45",
    customs: [
      {
        id: 1,
        name: "Patterns",
        options: [
          {
            id: 1,
            label: "Option One",
            image:
              "https://cdn.standardmedia.co.ke/images/sunday/yfslsitm2urora2w856e5ad3e1c741.jpg",
            price: { amount: 1200, prefix: "Ksh" },
            unit: { quantity: 1, text: "Pair" },
          },
        ],
      },
    ],
    description: "-- Product description goes here.",
  },
  {
    id: 13,
    categoryID: 7,
    shop: 5,
    title: "Boots",
    photo_url:
      "https://assets.ajio.com/medias/sys_master/root/20210217/IG6x/602c1143aeb2696981672831/-1117Wx1400H-460846190-black-MODEL.jpg",
    photosArray: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9385b389-ab97-44cd-be1b-250e49cbe4a2/wearallday-shoe-dxtsS5.png",
      "https://www.google.com/url?sa=i&url=http%3A%2F%2Fttss.ir%2Fants.aspx%3Fiid%3D27322477-wear%2Ball%2Bday%2Bnike%26cid%3D10&psig=AOvVaw3cUPXqaPCGL_ipe6aBMxzh&ust=1631377361435000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiuubjo9PICFQAAAAAdAAAAABAJ",
      "https://assets.ajio.com/medias/sys_master/root/20210217/IG6x/602c1143aeb2696981672831/-1117Wx1400H-460846190-black-MODEL.jpg",
    ],
    time: "45",
    customs: [
      {
        id: 1,
        name: "Patterns",
        options: [
          {
            id: 1,
            label: "Option One",
            image:
              "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9385b389-ab97-44cd-be1b-250e49cbe4a2/wearallday-shoe-dxtsS5.png",
            price: { amount: 1200, prefix: "Ksh" },
            unit: { quantity: 1, text: "Pair" },
          },
          {
            id: 1,
            label: "Option Two",
            image:
              "https://www.google.com/url?sa=i&url=http%3A%2F%2Fttss.ir%2Fants.aspx%3Fiid%3D27322477-wear%2Ball%2Bday%2Bnike%26cid%3D10&psig=AOvVaw3cUPXqaPCGL_ipe6aBMxzh&ust=1631377361435000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiuubjo9PICFQAAAAAdAAAAABAJ",
            price: { amount: 1200, prefix: "Ksh" },
            unit: { quantity: 1, text: "Pair" },
          },
          {
            id: 1,
            label: "Option Three",
            image:
              "https://assets.ajio.com/medias/sys_master/root/20210217/IG6x/602c1143aeb2696981672831/-1117Wx1400H-460846190-black-MODEL.jpg",
            price: { amount: 1200, prefix: "Ksh" },
            unit: { quantity: 1, text: "Pair" },
          },
        ],
      },
    ],
    description: "-- Product description goes here.",
  },
];

const shuffle = (array) => {
  var currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const products = shuffle(productsArray);

export const ingredients = [
  {
    ingredientId: 0,
    name: "Oil",
    photo_url:
      "https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg",
  },
  {
    ingredientId: 1,
    name: "Salt",
    photo_url:
      "https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg",
  },
  {
    ingredientId: 2,
    name: "Russet potatoes",
    photo_url:
      "http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg",
  },
  {
    ingredientId: 3,
    name: "Paprika",
    photo_url:
      "https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg",
  },
  {
    ingredientId: 4,
    name: "Black Pepper",
    photo_url: "https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg",
  },
  {
    ingredientId: 53,
    name: "Italian sauce",
    photo_url:
      "https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg",
  },
  {
    ingredientId: 54,
    name: "Crushed Tomatoes",
    photo_url:
      "https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg",
  },
  {
    ingredientId: 55,
    name: "Sugar",
    photo_url:
      "https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg",
  },
  {
    ingredientId: 56,
    name: "minced fresh parsley",
    photo_url:
      "https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg",
  },
  {
    ingredientId: 57,
    name: "ricotta cheese",
    photo_url:
      "https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg",
  },
  {
    ingredientId: 58,
    name: " fennel seed",
    photo_url:
      "https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg",
  },
  {
    ingredientId: 59,
    name: "Banana",
    photo_url:
      "https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg",
  },
  {
    ingredientId: 60,
    name: "Frozen Straberries",
    photo_url:
      "https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png",
  },
  {
    ingredientId: 61,
    name: "Greek Yogurt",
    photo_url:
      "http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg",
  },
];
