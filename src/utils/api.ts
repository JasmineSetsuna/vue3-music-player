import type { Banner } from "@/interface/banner";
import type { SongUrl } from "@/interface/song_url";
import type { Song } from "@/interface/song";
import type {
  DjProgram,
  Personalized,
  PersonalizedMv,
  PersonalizedNewSong,
} from "@/interface/personalized";
import type { TopListDetail } from "@/interface/toplist_detail";
import type {
  PersonalizedPrivateContent,
  Video,
  VideoGroup,
} from "@/interface/video";
import type { UserProfile } from "@/interface/user";
import http from "@/utils/http";

// check the user's status
export async function useLoginStatus() {
  return await http.get<{
    data: {
      code: number;
      profile: UserProfile;
    };
  }>("login/status");
}

// user login
export async function useLogin(phone: string, password: string) {
  return await http.get<{
    code: number;
    cookie: string;
    token: string;
  }>("login/cellphone", { phone: phone, password: password });
}

// carousel 
export async function useBanner() {
  const { banners } = await http.get<{ banners: Banner[] }>("/banner", {
    type: 1,
  });
  return banners;
}

// song's url by id
export async function useSongUrl(id: number) {
  const { data } = await http.get<{ data: SongUrl[] }>("/song/url", { id: id });
  return data.first();
}

// get the song's detail by url
export async function useSongDetail(id: number) {
  const { songs } = await http.get<{ songs: Song[] }>("/song/detail", {
    ids: id,
  });
  return songs.first();
}

export async function usePersonalized() {
  const { result } = await http.get<{ result: Personalized[] }>(
    "/personalized"
  );
  return result;
}

// 推荐新音乐-api
export async function usePersonalizedNewSong() {
  const { result } = await http.get<{ result: PersonalizedNewSong[] }>(
    "/personalized/newsong"
  );
  return result;
}

export async function useTopListDetail() {
  const { list } = await http.get<{ list: TopListDetail[] }>("/toplist/detail");
  return list;
}

// 推荐MV-api
export async function usePersonalizedMv() {
  const { result } = await http.get<{ result: PersonalizedMv[] }>(
    "personalized/mv"
  );
  return result;
}

export async function usePersonalizedPrivateContentList(
  limit: number = 10,
  offset: number = 0
) {
  const { result } = await http.get<{ result: PersonalizedPrivateContent[] }>(
    "personalized/privatecontent/list",
    {
      limit: limit,
      offset: offset,
    }
  );
  return result;
}

export async function useVideoGroupList() {
  const { data } = await http.get<{ data: VideoGroup[] }>("video/group/list");
  return data;
}

export async function useVideoTimelineRecommend(offset: number = 0) {
  const { datas } = await http.get<{ datas: Video[] }>(
    "video/timeline/recommend",
    { offset: offset }
  );
  return datas;
}
