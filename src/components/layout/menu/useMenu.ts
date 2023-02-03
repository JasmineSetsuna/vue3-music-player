import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  Planet,
  Music,
  VideoOne,
  Fm,
  Like,
  Computer,
  DownloadThree,
  PlayTwo,
} from "@icon-park/vue-next";

// 菜单
interface Menu {
  name: string;
  // 用来路由传值
  key: string;
  icon: any;
  // icon的主题
  theme: "outline" | "filled" | "two-tone" | "multi-color";
}

interface Menus {
  name: string;
  menus: Menu[];
}

export function useMenu() {
  const menus: Menus[] = [
    {
      name: "在线音乐",
      menus: [
        {
          name: "推荐",
          key: "discover",
          icon: Planet,
          theme: "outline",
        },
        {
          name: "音乐馆",
          key: "music",
          icon: Music,
          theme: "outline",
        },
        {
          name: "视频",
          key: "video",
          icon: VideoOne,
          theme: "outline",
        },
        {
          name: "电台",
          key: "dj",
          icon: Fm,
          theme: "outline",
        },
      ],
    },
    {
      name: "我的音乐",
      menus: [
        {
          name: "我喜欢",
          key: "love",
          icon: Like,
          theme: "outline",
        },
        {
          name: "本地歌曲",
          key: "local",
          icon: Computer,
          theme: "outline",
        },
        {
          name: "下载歌曲",
          key: "download",
          icon: DownloadThree,
          theme: "outline",
        },
        {
          name: "最近播放",
          key: "recently",
          icon: PlayTwo,
          theme: "outline",
        },
      ],
    },
  ];
  const route = useRoute();
  // route.meta.menu当前路由的信息
  const currentKey = ref(route.meta.menu);
  const router = useRouter();

  // 观察当前路由变化，并相应变化样式
  watch(
    () => route.meta.menu,
    (menu) => {
      currentKey.value = menu;
    }
  );

  const click = async (menu: Menu) => {
    await router.push({ name: menu.key, replace: true });
  };

  return {
    menus,
    click,
    currentKey,
  };
}
