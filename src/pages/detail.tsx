import React from 'react';
import Layout from '../layout/layout';

const menuList = [
  {
    id: 1,
    name: '수제등심돈까스(2장)',
    description:
      '수제로 만든 돈까스 카레입니다:) 야채와 과일을 오랜시간 끓여 만든 자극적이지 않은 담백한 맛의 카레입니다:)',
    price: 9500,
    img: 'https://ldb-phinf.pstatic.net/20220403_157/1648978064202zy6K0_JPEG/KakaoTalk_20220401_215436615_02.jpg?type=f220_220_60_sharpen',
  },
  {
    id: 2,
    name: '오믈렛카레',
    description:
      '오믈렛 안에는 체다치즈, 토핑은 파르미지아노 레지아노 치즈를 올려 치즈의 깊은 맛과 느끼함을 좋아하시는 분들에게 추천드립니다:) 매운 카레를 원하시는 경우 매운 고추가루 요청 부탁드립니다:)',
    price: 8300,
    img: 'https://ldb-phinf.pstatic.net/20220403_87/1648977947286lQE9S_JPEG/KakaoTalk_20220401_214559735_05.jpg?type=f220_220_60_sharpen',
  },
  {
    id: 3,
    name: '연어덮밥(뱃살X)',
    description:
      '수제간장과 유자간장으로 맛을 낸 연어덮밥 입니다:) 연어덮밥S와 다르게 뱃살부위가 포함되어있지 않습니다!',
    price: 9900,
    img: 'https://naverbooking-phinf.pstatic.net/20220504_88/1651629311374kvWzb_JPEG/9D77636A-0AFD-46F8-A89B-29107569F7CE_1_105_c.jpeg?type=f220_220_60_sharpen',
  },
  {
    id: 4,
    name: '연어덮밥s(뱃살포합)',
    description:
      '수제간장과 유자간장으로 맛을 낸 연어덮밥입니다:) 연어덮밥S는 연어뱃살이 포함되어 있습니다:)',
    price: 10900,
    img: 'https://ldb-phinf.pstatic.net/20220403_277/1648978335415nKH1f_JPEG/KakaoTalk_20220401_215436615_01.jpg?type=f220_220_60_sharpen',
  },
  {
    id: 5,
    name: '삼겹차슈덮밥',
    description: '수제간장에 삼겹살을 구워 불맛을 입힌 차슈덮밥입니다:)',
    price: 7900,
    img: 'https://ldb-phinf.pstatic.net/20220403_147/1648978447193V7nBz_JPEG/%C2%F7%BD%B4%B5%A4%B9%E4.jpg?type=f220_220_60_sharpen',
  },
  {
    id: 6,
    name: '호카레',
    description:
      '야채와 과일을 오랜시간 끓여 만든 자극적이지 않은 담백한 맛의 카레입니다:) 매운카레를 원하시는 경우 매운 고추가루를 따로 드립니다:)',
    price: 7200,
    img: 'https://ldb-phinf.pstatic.net/20220403_89/164898094756532daO_JPEG/KakaoTalk_20220401_215436615_09.jpg?type=f220_220_60_sharpen',
  },
  {
    id: 7,
    name: '베이컨크림우동',
    description:
      '청양고추랑 레드페퍼로 느끼함을 잡은 꾸덕한 크림우동입니다:) ps.사장님 꿀팁! 공깃밥을 추가해서 리조또처럼 즐겨보세요!',
    price: 8500,
    img: 'https://ldb-phinf.pstatic.net/20220403_108/1648981145486nL1NJ_JPEG/KakaoTalk_20220401_215436615_08.jpg?type=f220_220_60_sharpen',
  },
];

const commentList = [
  {
    id: 1,
    name: '윤기',
    img: 'https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjZfODQg/MDAxNDkzMjEyNjcyMjI5.leMfL9kw6JQGFsiiMZoMhb_MxyekOMVUGZcoj4QWB-Eg.pYwVENc-LzxWiO7jca-yPUB6g9v1zZUQHz1-bjI1jnQg.JPEG.simhyang72/image_2013842981493212601125.jpg?type=w800',
    date: '2023년 1월 23일',
    comment:
      '오므라이스 진짜로 맛있어요! 크림이랑 로제랑 고민했는데 크림 진짜 맛있어요!! 다음에는 로제 먹어볼래요 ㅎㅎ',
  },
  {
    id: 2,
    name: '세현',
    img: null,
    date: '2023년 2월 12일',
    comment: '연어덮밥 맛있어요.',
  },
  {
    id: 3,
    name: '영준',
    img: 'https://i.namu.wiki/i/hdCrESzOjsuMyZDzGR3GYmoXLSUnlfdeMg-X_ZuRXIJJxOqBgllvnUvc07A2VfDmTX5taHIFdj3Uxsa_w08d-g.webp',
    date: '2023년 2월 01일',
    comment:
      '친절하시고 깔끔하고 맛있어요! 카레랑 밥 리필도 해주셔서 정말 감사했어요. 또 먹고 싶어요!',
  },
  {
    id: 4,
    name: '지웅',
    img: null,
    date: '2023년 3월 30일',
    comment:
      '직원분 정말 친절하시고 음식들도 다 정갈하고 맛있어요! 갈 때마다 기분이 좋아지는 곳이예요👍',
  },
];

const Detail = () => {
  return (
    <Layout>
      <div className="flex-grow w-full flex justify-center h-full box-border pb-24">
        <div className="h-full w-[80rem] px-3 pt-5">
          <div className="w-full h-[28rem] bg-white flex">
            <div className=" w-1/3 h-full p-3">
              <img
                className="object-cover rounded-lg w-full h-full"
                alt="img"
                src={require('../d-images/스크린샷 2023-05-30 오후 12.13.41.png')}
              />
            </div>
            <div className="w-1/3 h-full flex flex-col p-3">
              <img
                className="object-cover rounded-lg w-full h-1/2 pb-[6px]"
                alt="img"
                src={require('../d-images/1554462084185031.jpg')}
              />
              <img
                className="object-cover rounded-lg w-full h-1/2 pt-[6px]"
                alt="img"
                src={require('../d-images/20201020_121337.jpg')}
              />
            </div>
            <div className="w-1/3 h-full flex flex-col p-3">
              <img
                className="object-cover rounded-lg w-full h-1/2 pb-[6px]"
                alt="img"
                src={require('../d-images/20230111＿170510.jpg')}
              />
              <img
                className="object-cover rounded-lg w-full h-1/2 pt-[6px]"
                alt="img"
                src={require('../d-images/스크린샷 2023-05-30 오후 12.14.13.png')}
              />
            </div>
          </div>
          <div className="w-full border-t border-solid border-gray-300 mt-5 p-3 pt-4">
            <span className="text-4xl">호식당</span>
            <span className="text-base opacity-60 pl-2">일식집</span>
          </div>
          <div className="w-full px-3 pb-2 text-base flex gap-3">
            <span>
              <span className="text-red-600 pr-1">★</span>4.51
            </span>
            <span className=" border-l-2 border-solid border-gray-200"></span>
            <span className=" underline">후기 136개</span>
            <span className=" border-l-2 border-solid border-gray-200"></span>
            <span>👑 베스트10!</span>
          </div>
          <div className="w-full p-3 mt-3 border-t border-solid border-gray-300">
            <div className="w-full flex justify-start pb-3">
              <img
                className="mr-2 w-6 h-6 pt-[3px] opacity-80"
                alt=""
                src="https://api.iconify.design/ic:baseline-location-on.svg?color=gray"
              />
              <span className="h-full w-full font-medium text-gray-700 text-lg">
                경기 용인시 수지구 죽전로 136 월드프라자 106호
              </span>
            </div>
            <div className="w-full flex justify-start pb-3">
              <img
                className="mr-2 w-6 h-6 pt-[3px] opacity-80"
                alt=""
                src="https://api.iconify.design/ic:baseline-access-time.svg?color=gray"
              />
              <span className="h-full w-full font-medium text-gray-700 text-lg">
                <span className=" text-green-500 mr-3">영업중</span> 11:00 ~
                20:00
              </span>
            </div>
            <div className="w-full flex justify-start pb-3">
              <img
                className="mr-2 w-6 h-6 pt-[3px] opacity-80"
                alt=""
                src="https://api.iconify.design/ic:baseline-phone.svg?color=gray"
              />
              <span className="h-full w-full font-medium text-gray-700 text-lg">
                0507-1317-5514
              </span>
            </div>
            <div className="w-full flex justify-start pb-3">
              <img
                className="mr-2 w-6 h-6 pt-[3px] opacity-80"
                alt=""
                src="https://api.iconify.design/ic:baseline-home.svg?color=gray"
              />
              <span className="h-full w-full font-medium text-lg text-green-500 underline">
                http://www.instagram.com/hosikdangs
              </span>
            </div>
            <div className="w-full flex justify-start pb-3">
              <img
                className="mr-2 w-6 h-6 pt-[3px] opacity-80"
                alt=""
                src="https://api.iconify.design/ph:chat-centered-fill.svg?color=gray"
              />
              <div className="h-full w-full font-medium text-gray-700 text-lg">
                정성가득한 수제카레와싱싱한 연어덮밥이 맛있는 호식당입니다:)
                위치는 용인 죽전 단국대 근처에 위치하고 있으며 보정동 하고도
                가까운 곳에 위치해 있습니다. 주메뉴로는 연어덮밥,
                차슈덮밥(삼겹살), 일본식카레, 수제등심 돈까스 등을 준비해 놓고
                있습니다:) 대학생들에게 질 좋은 음식을 부담없는 가격에 푸짐하게
                대접하고 싶은 마음으로 운영하고 있습니다:) 수제로 직접 만들어
                부담없는 가격을 유지하고 있으며 메뉴들을 더 맛있게 만들기 위해
                끊임없이 연구하며 개선해 나가고 있습니다:) 전메뉴 포장
                가능합니다.(배달은 배달의 민족으로 주문해 주시면 되세요) 항상
                건강하시고 행복한 일들 가득하세요:) 감사합니다!!
              </div>
            </div>
          </div>
          <div className="w-full flex p-3 pt-6 border-t border-solid border-gray-300">
            <img
              className="w-7 j-7 opacity-80 mr-2"
              alt=""
              src="https://api.iconify.design/ic:outline-restaurant-menu.svg?color=black"
            />
            <span className="text-2xl">메뉴</span>
          </div>
          <div className="w-full flex flex-wrap justify-start items-start gap-6 p-3 pb-6">
            {menuList.map((menu) => (
              <div
                key={menu.id}
                className="w-[30rem] h-36 border border-solid border-gray-300 rounded-lg flex"
              >
                <div className="w-48 h-full flex justify-center items-center">
                  <img className="w-full h-full" alt="" src={menu.img} />
                </div>
                <div className="w-full h-full flex flex-col justify-center items-start">
                  <span className="px-2 pb-1">{menu.name}</span>
                  <span className="text-sm font-normal text-gray-500 px-2 h-10 overflow-hidden">
                    {menu.description}
                  </span>
                  <span className="px-2 text-red-600 text-base">
                    {menu.price}원
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex p-3 pt-6 mt-2 border-t border-solid border-gray-300">
            <img
              className="w-7 j-7 opacity-80 mr-2"
              alt=""
              src="https://api.iconify.design/ic:outline-restaurant-menu.svg?color=black"
            />
            <span className="text-2xl">후기</span>
          </div>
          {commentList.map((comment) => (
            <div
              key={comment.id}
              className="w-full my-3 px-3 border-b border-solid border-gray-300 pb-4"
            >
              <div className="w-full h-16 flex">
                <img
                  className="w-[51px] h-[51px] rounded-full mr-3 border-2 border-gray-300 border-solid"
                  alt=""
                  src={
                    comment.img ||
                    'https://api.iconify.design/vs:profile.svg?color=gray'
                  }
                />
                <div className="w-full h-full">
                  <div className=" text-lg">{comment.name}</div>
                  <div className="text-sm font-normal opacity-50">
                    {comment.date}
                  </div>
                </div>
              </div>
              <div className=" font-normal">{comment.comment}</div>
            </div>
          ))}
          <div className="w-full flex p-3">
            <img
              className="w-7 j-7 opacity-80 mr-2"
              alt=""
              src="https://api.iconify.design/ic:baseline-location-on.svg?color=Black"
            />
            <span className="text-2xl">위치</span>
          </div>
          <img
            className="w-full h-[30rem] mt-2 object-cover"
            alt="img"
            src={require('../d-images/location.png')}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
