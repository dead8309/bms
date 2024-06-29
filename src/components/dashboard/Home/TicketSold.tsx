import HomeContainerCard from "../HomeContainerCard";

function TicketSold() {
  return (
    <HomeContainerCard className="h-[35vh] col-span-2 md:col-span-1">
      <div className="flex gap-1 items-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="31"
            height="31"
            rx="15.5"
            stroke="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.6822 10.9261L24.1028 12.4736C24.1588 12.6801 24.1554 12.898 24.0931 13.1027C24.0307 13.3075 23.9118 13.4911 23.7497 13.633L23.6931 13.6798C23.4145 13.8942 23.2049 14.1837 23.0898 14.5133C22.9747 14.8428 22.9591 15.1982 23.0449 15.5364C23.1306 15.8745 23.314 16.1808 23.5728 16.4182C23.8316 16.6555 24.1547 16.8137 24.5029 16.8735L24.5818 16.8854C24.8024 16.9137 25.0095 17.006 25.1769 17.1505C25.3442 17.2951 25.4643 17.4854 25.5219 17.6973L25.9501 19.2729C25.9998 19.4556 26.0125 19.6462 25.9875 19.8337C25.9626 20.0213 25.9003 20.2022 25.8045 20.366C25.7086 20.5298 25.5809 20.6734 25.4288 20.7886C25.2766 20.9038 25.1029 20.9882 24.9177 21.0372L10.1059 24.951C9.7318 25.0498 9.33325 24.9979 8.9979 24.8069C8.66256 24.6159 8.41788 24.3013 8.31767 23.9324L7.91498 22.4501C7.85497 22.2295 7.85715 21.9969 7.9213 21.7774C7.98544 21.5579 8.10911 21.3599 8.27897 21.2046L8.33848 21.1542C8.61133 20.9347 8.81398 20.642 8.92203 20.3115C9.03008 19.981 9.03892 19.6267 8.94747 19.2914C8.85603 18.956 8.6682 18.6539 8.40663 18.4214C8.14506 18.1889 7.8209 18.036 7.47322 17.981C7.23275 17.9428 7.00862 17.8368 6.82784 17.6758C6.64705 17.5148 6.51731 17.3057 6.45425 17.0737L6.04972 15.5856C6.0001 15.4029 5.98746 15.2123 6.01253 15.0247C6.03759 14.8372 6.09988 14.6564 6.19583 14.4926C6.29177 14.3287 6.4195 14.1852 6.57171 14.0701C6.72392 13.955 6.89764 13.8706 7.08293 13.8217L21.8936 9.90785C22.0789 9.85884 22.2721 9.8463 22.4623 9.87096C22.6524 9.89561 22.8358 9.95696 23.0019 10.0515C23.1681 10.1461 23.3137 10.272 23.4305 10.422C23.5472 10.5721 23.6329 10.7434 23.6826 10.9261M22.1619 11.1446L7.4776 15.025C7.27497 15.0786 7.15449 15.2842 7.20889 15.4841L7.49768 16.5473C8.12221 16.6713 8.69921 16.9649 9.16365 17.3949C9.62809 17.825 9.96151 18.3744 10.1263 18.9813C10.2913 19.5882 10.2812 20.2284 10.097 20.8299C9.91287 21.4314 9.56201 21.9702 9.084 22.3856L9.37279 23.4489C9.42755 23.6487 9.63565 23.7675 9.83828 23.7139L24.5223 19.8335C24.7249 19.7799 24.8454 19.5743 24.791 19.3745L24.5025 18.3116C23.878 18.1875 23.301 17.8939 22.8365 17.4638C22.3721 17.0337 22.0387 16.4842 21.8739 15.8772C21.7088 15.2704 21.7189 14.6301 21.903 14.0286C22.0871 13.4272 22.4379 12.8883 22.9159 12.4729L22.6271 11.4096C22.601 11.3136 22.5373 11.2318 22.45 11.1821C22.3627 11.1324 22.2593 11.1189 22.1619 11.1446ZM21.6932 18.9071C21.7304 19.0441 21.7398 19.187 21.721 19.3277C21.7022 19.4683 21.6555 19.6039 21.5836 19.7268C21.5117 19.8496 21.4159 19.9573 21.3018 20.0436C21.1876 20.1299 21.0574 20.1933 20.9184 20.23C20.7795 20.2667 20.6346 20.276 20.492 20.2575C20.3494 20.2389 20.2119 20.1929 20.0873 20.1219C19.9628 20.051 19.8536 19.9565 19.7661 19.844C19.6785 19.7314 19.6143 19.6029 19.5771 19.4659C19.502 19.1892 19.5414 18.8943 19.6867 18.6463C19.8319 18.3982 20.0712 18.2172 20.3518 18.1431C20.6324 18.069 20.9314 18.1078 21.1829 18.2511C21.4345 18.3944 21.618 18.6304 21.6932 18.9071ZM20.9374 16.1246C21.0126 16.4013 20.9733 16.6962 20.828 16.9443C20.6827 17.1924 20.4435 17.3735 20.1629 17.4476C19.8823 17.5218 19.5833 17.483 19.3317 17.3397C19.0801 17.1964 18.8965 16.9605 18.8214 16.6838C18.7505 16.4085 18.7923 16.1167 18.938 15.8717C19.0836 15.6266 19.3212 15.448 19.5994 15.3745C19.8776 15.301 20.1739 15.3384 20.4243 15.4788C20.6747 15.6192 20.8592 15.8512 20.9374 16.1246ZM20.181 13.3424C20.2182 13.4795 20.2277 13.6224 20.2089 13.763C20.1901 13.9037 20.1434 14.0393 20.0715 14.1621C19.9996 14.285 19.9038 14.3927 19.7897 14.479C19.6756 14.5654 19.5454 14.6287 19.4064 14.6655C19.2675 14.7022 19.1226 14.7115 18.9799 14.693C18.8373 14.6745 18.6998 14.6285 18.5752 14.5575C18.4507 14.4866 18.3415 14.3922 18.2539 14.2796C18.1663 14.1671 18.1021 14.0386 18.0649 13.9016C17.9897 13.6249 18.0291 13.33 18.1743 13.0819C18.3196 12.8338 18.5588 12.6527 18.8394 12.5786C19.12 12.5044 19.419 12.5432 19.6706 12.6865C19.9222 12.8297 20.1058 13.0657 20.181 13.3424ZM16.3975 8.61417L17.3292 9.92621C17.3427 9.94566 17.3559 9.96546 17.3683 9.98526L8.45458 12.3408L14.3636 8.26023C14.6809 8.04127 15.0733 7.95555 15.4547 8.02192C15.836 8.0883 16.1754 8.30133 16.3975 8.61417Z"
            fill="black"
          />
        </svg>

        <h1>Total Ticket Sold </h1>
      </div>

      <div className="py-8 text-[#60769D]">
        <div className="flex gap-3 items-center">
          <div>
            <h1 className="text-[28px]">20 </h1>
            <span className="text-xs ">ticket</span>
          </div>
          <h1 className="text-2xl">SOLD</h1>
        </div>

        <hr className="my-2 border-[#703892] border-[1px] " />

        <div className="flex gap-3 items-center">
          <div>
            <h1 className="text-[28px]">40 </h1>
            <span className="text-xs ">ticket</span>
          </div>
          <h1 className="text-2xl">REMAINED</h1>
        </div>
      </div>
    </HomeContainerCard>
  );
}

export default TicketSold;
