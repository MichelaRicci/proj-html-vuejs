import { reactive } from "vue"

const foodieJournal = reactive({

  foodieJournal: [
    {
      img: 'assets/img/single-post.jpg',
      title: 'Food Corner: Top Japanese Restaurants for Sushi',
      author: 'By admin',
      date: 'March 25th, 2019'


    },
    {
      img: 'assets/img/fi-roundup.jpg',
      title: 'Roundup: My New Favourite Recipes For Healthy Living',
      author: 'By admin',
      date: 'March 25th, 2019'

    },
    {
      img: 'assets/img/fi-toasts.jpg',
      title: 'Why These Toasts with Tea are My New Favorite',
      author: 'By admin',
      date: 'March 25th, 2019'

    }
  ],
})


export { foodieJournal }