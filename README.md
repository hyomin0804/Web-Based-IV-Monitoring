# IVSwag_Web_Project
# IVSwag_Web_Project _ 창의혁신 DNA 산학협력 팀프로젝트
: 웨어러블기반 인공지능을 적용한 수액 통합 관리 플랫폼”

![image](https://github.com/hyomin0804/IVSwag_Web_Project/assets/87791247/f905b19f-85ec-471a-90dc-38cb32b9eed4)

---
**개발 기간:** 2022.06 - 2022.12


**제공 플랫폼:** Web


**개발 인원:** 5 명 (소프트웨어 2명 / 하드웨어 3명)


**담당 역할**

1) 딥러닝 모델 개발 (데이터 생성 ,가공,학습)

2) 수액 소진속도 측정 알고리즘 작성

3) 웹 프론트엔드 제작 

4) 하드웨어 외관 설계 (SoildWorks)

---

**개발 환경:** Raspberry Pi 4,  VS Code, HeidiSQL


**DB:** MariaDB 10.1


**통신:** Flask, Ajax, Socket.io


**개발 언어:** Python, JavaScript, HTML/CSS


**라이브러리:** OpenCV, TensorFlow, Express



#### PUBLICATIONS_공동 1저자
Kim Y, Seol J, Lee H, Lee J, Park J, Kim KG. Web-Based Intravenous Fluid Treatment Monitoring Platform in Nursing Station. Surgical Innovation. 29(5):677-680 (2022). https://doi.org/10.1177/15533506211065849

---
### 연구 배경
![image](https://github.com/hyomin0804/IVSwag_Web_Project/assets/87791247/1e03f089-18c5-4a3a-ba30-63b8ae9c2c9c)

### 프로젝트 세분화: 측정부, 감지부, 조절부 개요
![image](https://github.com/hyomin0804/IVSwag_Web_Project/assets/87791247/e1ada143-947d-4d68-b7ce-63eacf7d44ad)

### 간호 스테이션(EMR) 기반 웹페이지 구현
![image](https://github.com/hyomin0804/IVSwag_Web_Project/assets/87791247/a8b39c82-c889-4963-9ae5-5a27b0a50019)

### 수액 방울 감지 딥러닝 모델 개발 _YOLOv2
![image](https://github.com/hyomin0804/IVSwag_Web_Project/assets/87791247/b14d1d56-00bc-44ed-bb1f-ec42535a781c)

### 측정부 Web 통신 아키텍처     
![image](https://github.com/hyomin0804/IVSwag_Web_Project/assets/87791247/92613496-a9db-4da7-bcb7-66f01047e405)

### 딥러닝 모델 수액 방울 Detection 성능에 대한 평가
: 2명의 관측자가 각각의 주입 속도마다 10번 반복 측정
![image](https://github.com/hyomin0804/IVSwag_Web_Project/assets/87791247/3196e395-c84b-44f1-9c83-5a961fc72fc1)

---
### 웨어러블기반 인공지능을 적용한 수액 통합 관리 플랫폼 개발 요약 및 결론
##### [요약]
간호사의 업무 중 수액관리는 시간을 많이 차지하는 반복적인 업무이며, 수액 주입에 문제가 생겼을 때 빠른 조치가 없으면 자칫 사고로 이어질 가능성이 있습니다. 따라서 본 논문에서는 간호스테이션에서 여러 환자의 수액을 통합적으로 관리할 수 있는 수액 관리 통합 시스템을 개발했습니다.

##### [결론]
기존에 있던 광학센서나 초음파를 이용한 수액 속도 모니터링은 물방울이 특정 구간을 지나가지 않으면 감지하지 못하고, 주입 속도에 이상이 생겼을 경우 수액의 상태를 직접 확인하러 가야 하지만, 딥러닝을 통한 물방울 감지는 간호 스테이션에서 실시간 챔버 영상 및 주입량 피드백을 통해 간호사에게 보다 신속하고 직관적으로 챔버 상태 및 수액 주입속도를 알려준다는 점에서 의의가 있습니다.

이 시스템은 여러 환자의 수액 상태를 24시간 모니터링 가능하게 하여 사고를 사전에 빠르게 확인할 수 있게 해줌으로써 의료현장에서 간호사분들의 효율적인 업무 처리에 도움을 줄 것으로 기대됩니다.


### 기타 자료
![image](https://github.com/hyomin0804/IVSwag_Web_Project/assets/87791247/bbf5fbb7-2c9a-4173-8c80-6f75b759f262)
