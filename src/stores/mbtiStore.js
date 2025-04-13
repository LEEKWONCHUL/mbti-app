import { makeAutoObservable } from "mobx";

class MBTIStore {
    mbtiList = [
        { type: "ISTJ", title: "세상의 소금형", description: "신중하고 책임감이 강하며, 현실적이고 사실적인 성격입니다." },
        { type: "ISFJ", title: "임금 뒷편의 권력형", description: "성실하고 따뜻하며, 조화를 중시하고 헌신적인 성향입니다." },
        { type: "INFJ", title: "예언자형", description: "통찰력이 뛰어나고 조용하며, 비전을 제시하는 리더입니다." },
        { type: "INTJ", title: "과학자형", description: "논리적이며 전략적인 사고를 중시하고 자기 주장이 강한 편입니다." },
    
        { type: "ISTP", title: "만능 재주꾼형", description: "실용적이고 논리적이며, 문제 해결 능력이 뛰어납니다." },
        { type: "ISFP", title: "성인군자형", description: "조용하고 겸손하며, 예술적 감성과 미적 감각이 뛰어납니다." },
        { type: "INFP", title: "잔다르크형", description: "이상주의적이며 깊은 내면을 지니고 타인을 잘 이해합니다." },
        { type: "INTP", title: "아이디어 뱅크형", description: "호기심 많고 창의적인 성향으로 분석과 이론에 강합니다." },
    
        { type: "ESTP", title: "수완 좋은 활동가형", description: "현실적이고 활동적이며 모험을 즐깁니다." },
        { type: "ESFP", title: "사교적인 연예인형", description: "사람들과 어울리는 것을 좋아하고 에너지가 넘칩니다." },
        { type: "ENFP", title: "재기발랄한 활동가형", description: "열정적이고 상상력이 풍부하며 사람을 좋아합니다." },
        { type: "ENTP", title: "뜨거운 논쟁을 즐기는 변론가형", description: "도전적이고 창의적인 성향으로 변화를 선호합니다." },
    
        { type: "ESTJ", title: "엄격한 관리자형", description: "체계적이고 논리적이며 책임감이 강한 리더입니다." },
        { type: "ESFJ", title: "사교적인 외교관형", description: "협조적이고 친절하며 타인의 감정을 잘 배려합니다." },
        { type: "ENFJ", title: "정의로운 사회운동가형", description: "공감 능력이 뛰어나고 타인의 발전을 도모합니다." },
        { type: "ENTJ", title: "대담한 통솔자형", description: "결단력 있고 전략적이며 리더십이 뛰어납니다." },
      ];

  constructor() {
    makeAutoObservable(this);
  }
}

const mbtiStore = new MBTIStore();
export default mbtiStore;