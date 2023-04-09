export const userColums = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt="avatar" className="cellImg" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email ID", width: 230 },
  { field: "age", headerName: "Age", width: 70 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWidthStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
    status: "Active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg",
    email: "Jamie.Lannister@gmail.com",
    status: "Passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://lh3.googleusercontent.com/WIqxosS5lBdqvCgF9LJERdIwnZXKyJTOQ0RLHCyFgheQCse5oPehuXSQDcR3Ut_z49rebu99urR3ZJyaEUau66bS=w640-h400-e365-rj-sc0x00ffffff",
    email: "Lannister@gmail.com",
    status: "Pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://wallpapercave.com/wp/wp4747281.jpg",
    email: "Stark@gmail.com",
    status: "Active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://preview.redd.it/no-spoilers-why-does-the-dragon-in-the-targaryen-sigil-have-v0-utzw8dwacxd91.jpg?width=640&crop=smart&auto=webp&s=60167a6af96a01811dbae0783b288683382a1a26",
    email: "Targaryen@gmail.com",
    status: "Passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://www.nme.com/wp-content/uploads/2019/07/melisandre-2000x1270.jpg",
    email: "Melisandre@gmail.com",
    status: "Active",
    age: 15,
  },
  {
    id: 7,
    username: "Arya",
    img: "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/arya-stark-1920.jpg",
    email: "Arya@gmail.com",
    status: "Passive",
    age: 44,
  },
  {
    id: 8,
    username: "tyrion",
    img: "https://w0.peakpx.com/wallpaper/844/829/HD-wallpaper-tyrion-lannister-game-of-thrones-tyrion-lannister-game-of-thrones-tv-shows.jpg",
    email: "tyrion@gmail.com",
    status: "Active",
    age: 36,
  },
  {
    id: 9,
    username: "Iron Man",
    img: "https://media.contentapi.ea.com/content/dam/news/www-ea/images/2022/09/ea-motive-new-title-teaser-16x9-featured.jpg.adapt.crop16x9.575p.jpg",
    email: "Iron.Man@gmail.com",
    status: "Pending",
    age: 65,
  },
  {
    id: 10,
    username: "Jhon Wick",
    img: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
    email: "Jhon.Wick@gmail.com",
    status: "Active",
    age: 65,
  },
];
