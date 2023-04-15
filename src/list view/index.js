import { useState } from "react";

function ListView() {
  const data = [
    {
      id: 1,
      posterUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202304/11106_103_100003.jpg",
    },
    {
      id: 2,
      posterUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202303/11117_103_100001.jpg",
    },
    {
      id: 3,
      posterUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202302/10765_103_100002.jpg",
    },
    {
      id: 4,
      posterUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202302/11078_103_100001.jpg",
    },
    {
      id: 5,
      posterUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202303/11121_103_100001.jpg",
    },
    {
      id: 6,
      posterUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202304/11136_103_100001.jpg",
    },
    {
      id: 7,
      posterUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202304/11093_103_100002.jpg",
    },
    {
      id: 8,
      posterUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202304/10956_103_100003.jpg",
    },
    {
      id: 9,
      posterUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202304/11127_103_100001.jpg",
    },
    {
      id: 10,
      posterUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202304/11125_103_100003.jpg",
    },
  ];
  const [more, setMore] = useState(4);
  return (
    <>
      <div className="bg-black min-h-screen max-h-full">
        <div className="grid grid-cols-1 text-white text-center py-5 px-3 md:px-10 max-h-full">
          <p className="text-[25px] text-[#df4b1e] font-medium">
            LIST OF MOVIES
          </p>
          <p>Date time - 20:00PM 15/04/2023</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 py-5 md:py-10 gap-3 md:gap-5">
            {data.map(
              (item, index) =>
                index < more && (
                  <div key={item.id} className="relative">
                    <img
                      className="h-[320px] lg:h-[420px]"
                      src={item.posterUrl}
                      alt=""
                    ></img>
                    <div className="absolute ease-in-out duration-500 opacity-0 hover:opacity-100 top-0 right-0 left-0 bottom-0 overflow-hidden bg-fixed bg-black/80">
                      <button
                        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white
                                     border border-white text-sm py-[13px] px-[18px] md:px-[25px] hover:bg-[#c40404] hover:border-none
                                    "
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="">
            <button
              onClick={() => setMore(more + 4)}
              className="px-8 text-[#df4b1e] py-2 bg-transparent border border-[#df4b1e] rounded-sm"
            >
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListView;
