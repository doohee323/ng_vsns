NG-VSNS
=====

: AngularJS Project for VSNS

작업내용
----

Railscasts.com의 Ryan이 게재한 내용 중에 `AngularJS`에 대한 스크린캐스트를 오래 전에 본 적이 있었습니다. "이건 또 뭐야~" 

레일스 프레임워크는 웹개발을 위한 프론트와 백엔드를 모두 지원하기 때문에 당연히 레일스만으로 힘겨워 하던 저에게는 별관심을 끌지 못했습니다. 

데브스터디에 합류하면서 프론트엔드로 `AngularJS`를 사용하게 되어 그동안 겁만 먹고 멀리하던 `AngularJS`를 흥분 반 두려움 반으로 공부하고 있습니다. 마치 처음 레일스를 혼자 접하면 겪었던 모든 상황을 접하면서 하나 하나 알아가고 있습니다. 

데브스터디의 여러 멤버들이 페이스북 그룹에 올려 주신 내용들을 찾아가면서, 혼자 접근했다면 이부분에서도 많은 시간이 걸렸을 것 입니다만 ㅎㅎㅎ, 짧은 시간에 많은 것을 알게 되었습니다. 한빛미디어에서 eBook으로 시판하고 있는 AngularJS 번역서도 보고, 60분짜리 동영상도 보고, Angularjs.org 웹사이트에 소개된 동영상도 보고...

결국, 이준헌님이 알려주었던 scaffold generator인 `yeoman`으로 `AnglularJS` 프로젝트를 시작하는 것이 수훨하다는 것을 알게 되었습니다. 이것도 페이스북에 글을 올린 것 처럼, yo와 yeoman의 차이점을 몰라서, AngularJS.org 공식 웹사이트를 자세히 봤으면 알 수 있었지만(김성준님이 알려줘서 알게 되었지만, 감사, 꾸벅), 혼란스러워 했습니다. 

최종적으로 http://yeoman.io 웹사이트에 있는 데로, `yeoman`을 설치하고 프로젝트 디렉토리를 생성하고 이동한 후 `$ yo` 요우라고 명령을 실행하면 angularjs 프로젝트 템플릿 파일들을 만들어 줍니다. 와우, 이것은 마치 레일스 프로젝트를 새로 생성할 때 실행하는 명령인 `rails new [proj_name]` 와 비슷한 상황을 느끼게 해 주었습니다. 잠시 착각에 빠집니다. 생각보다는 훨씬 수월하게 angularjs에 미칠 수 있겠는 걸~ ㅎㅎㅎ.

물론, 개발용 로컬머신에는 사전에 `nodejs`와 `npm`이 설치되어 있어야 합니다. 이 부분은 제가 맥북을 가지고 있어서 그리 어럽지 않게 설치할 수 있었습니다. 

시작전에 꼭 봐두어야 할 동영상 링크를 아래에 소개합니다. 

  1. 홍두희님이 페이스북 그룹에 올려주신 동영상 링크입니다. 이것은 AngularJS의 전반적인 개념을 잡는데 너무나도 훌륭한 튜토리얼이라고 생각합니다. 

     >http://www.youtube.com/watch?v=i9MHigUZKEM

  2. 다음은 angularjs scaffold generator인 `yeoman`을 이용하여 angularjs 프로젝트를 개발하는 과정을 소개한 훌륭한 동영상입니다. 단 주의할 것은 아래 동영상에서는 yeoman v 0.9.6 버전으로 작업하는 과정을 소개한 것이어서 yeoman 1.0 버전을 사용할 때는 http://yeoman.io 웹사이트에 소개(v 1.0)된 내용데로 작업을 해야 한다는 것입니다. 그러나 아래의 동영상은 yeoman의 개념을 잡기에 아주 훌륭한 동영상인 것 같습니다.  

     >http://youtu.be/iUQ1fvdO9GY

  3. 한빛미디어의 eBook은 O'rell사의 `AngularJS` 를 번역한 것인데, 구매하면 pdf 파일을 다운로드 받을 수 있습니다. 한글번역서라서의 군데군데 문맥상의 이해가 쉽지 않은 부분이 있지만, 그런데로 빠른 시간내에 AngularJS의 개념을 잡는데 아주 좋은 것 같습니다. 


코딩 에디터
--------

`SublimeText` 에디터에 AngularJS 플러그인을 설치하면 highlight라든지 autocompletion 이 작동합니다. 아래의 링크를 참고하면 쉽게 설치할 수 있습니다. 

https://github.com/angular-ui/AngularJS-sublime-package

IDE
-------

자바스크립트 프로젝트 IDE로는 `Webstorm`이 좋다고 합니다. 성질이 급해서 바로 구매해 버렸죠. ㅎㅎㅎ
그러나 내가 생각했던 기능은 그리 만족스럽지 못했습니다. yeoman 같은 툴이 내장되었으면 했는데, 그렇지 않았습니다. yeonman 홈페이지의 내용을 보면 Webstorm과 같은 IDE에서 yeoman를 plugin으로 사용할 수 있도록 하는 것이 큰 목적 중에 하나라고 하는 것으로 봐서는 향후에는 Webstorm과 같은 IDE에서 yeoman으로 편하게 작업을 할 수 있지 않을까 생각합니다. 그러나 Youtube를 검새해 보면 Webstorm에서 yeoman을 사용하는 방법을 스크린캐스트로 올려 놓은 것이 있습니다. 어떻게 환경을 구성했는지는 알 수 없지만, 방법이 있는가 봅니다. 구글신에게 물어 보니깐(^^) 잘 모르겠다는군요. 

코딩
------

yeoman이 설치된 상태에서 프로젝트 디렉토리로 이동한 후에 아래와 같이 실행하면, yeoman의 scaffolding이 진행됩니다. 

```
$ yo
```

이렇게 하면 많은 디렉토리와 파일들이 생성됩니다. 여기에다가 items.html 템플릿 파일을 추가하고 main.js 파일에 `ItemsCtrl`를 추가했고 `itemFactory`라는 factory를 생성하여 `DI`으로 넘겨 주었습니다. 문제의 코디라인은 `main.js` 파일의 #22~25라인인데, 다른 도메인의 json 데이터를 불러오는데서 오류가 발생합니다. 

문제점. #1

> "not allowed by access-control-allow-origin" 에러

VSNS 레일스 프로젝트에 `rack-cors`젬을 추가하고 설치한 후 `config/application.rb` 파일에 아래의 사항을 추가해 줍니다. 

```
config.middleware.use Rack::Cors do
  allow do
    origins '*'
    resource '*', :headers => :any, :methods => [:get, :post, :options]
  end
end
```

이렇게하면 문제가 해결된 듯하지만, 다시 아래와 같은 JSON 파싱에러가 발생하게 됩니다. 

문제점. #2

> JSON parse error

이 문제에 대한 해결이 필요한 상태입니다. 



