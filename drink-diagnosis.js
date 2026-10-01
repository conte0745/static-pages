const drinks = [
  { name: "梅酒ソーダ", type: "果実酒", sweetness: 5, strength: 2, bitterness: 1, fruity: 5, sparkling: 5, scene: "relax", note: "梅の甘酸っぱさと軽い泡で、ゆっくり飲みたい夜に。" },
  { name: "カシスオレンジ", type: "カクテル", sweetness: 4, strength: 2, bitterness: 1, fruity: 5, sparkling: 1, scene: "party", note: "オレンジの香りが広がる、甘口カクテルの定番。" },
  { name: "ファジーネーブル", type: "カクテル", sweetness: 4, strength: 2, bitterness: 1, fruity: 5, sparkling: 1, scene: "party", note: "桃とオレンジのやさしい甘さを楽しめます。" },
  { name: "白桃サワー", type: "サワー", sweetness: 4, strength: 2, bitterness: 1, fruity: 5, sparkling: 5, scene: "party", note: "桃の香りと炭酸のすっきり感が好相性。" },
  { name: "レモンサワー", type: "サワー", sweetness: 2, strength: 3, bitterness: 2, fruity: 2, sparkling: 5, scene: "meal", note: "レモンの酸味と泡が、料理の味を引き立てます。" },
  { name: "グレープフルーツサワー", type: "サワー", sweetness: 2, strength: 3, bitterness: 2, fruity: 3, sparkling: 5, scene: "meal", note: "柑橘の爽やかさで、食事と合わせやすい一杯。" },
  { name: "ハイボール", type: "ウイスキーカクテル", sweetness: 1, strength: 4, bitterness: 2, fruity: 1, sparkling: 5, scene: "meal", note: "ウイスキーの香りと強めの炭酸をシンプルに。" },
  { name: "ジントニック", type: "カクテル", sweetness: 1, strength: 3, bitterness: 2, fruity: 2, sparkling: 5, scene: "party", note: "ジンのハーブ感とライムの香りが軽やか。" },
  { name: "モスコミュール", type: "カクテル", sweetness: 2, strength: 3, bitterness: 1, fruity: 3, sparkling: 5, scene: "party", note: "ライムの酸味とジンジャーの風味が特徴です。" },
  { name: "モヒート", type: "カクテル", sweetness: 2, strength: 3, bitterness: 1, fruity: 4, sparkling: 5, scene: "party", note: "ミントとライムの香りがすっと抜けます。" },
  { name: "マリブコーク", type: "カクテル", sweetness: 4, strength: 3, bitterness: 1, fruity: 3, sparkling: 5, scene: "party", note: "ココナッツの甘い香りにコーラの泡を合わせて。" },
  { name: "スクリュードライバー", type: "カクテル", sweetness: 3, strength: 3, bitterness: 1, fruity: 4, sparkling: 1, scene: "party", note: "オレンジの果実感を楽しむ、すっきりしたカクテル。" },
  { name: "ミモザ", type: "カクテル", sweetness: 3, strength: 2, bitterness: 1, fruity: 4, sparkling: 5, scene: "party", note: "オレンジの風味とスパークリングワインの泡を楽しむカクテル。" },
  { name: "キューバリブレ", type: "カクテル", sweetness: 3, strength: 3, bitterness: 1, fruity: 3, sparkling: 5, scene: "party", note: "ラムとコーラにライムの酸味を加えた、爽やかな組み合わせ。" },
  { name: "ダイキリ", type: "カクテル", sweetness: 2, strength: 4, bitterness: 1, fruity: 3, sparkling: 1, scene: "party", note: "ラム、ライム、砂糖を合わせたシンプルなカクテル。" },
  { name: "マルガリータ", type: "カクテル", sweetness: 2, strength: 4, bitterness: 2, fruity: 3, sparkling: 1, scene: "party", note: "テキーラに柑橘の酸味とオレンジリキュールを合わせて。" },
  { name: "テキーラサンライズ", type: "カクテル", sweetness: 4, strength: 3, bitterness: 1, fruity: 4, sparkling: 1, scene: "party", note: "テキーラとオレンジの果実感に、グレナデンを重ねた一杯。" },
  { name: "甘口の白ワイン", type: "ワイン", sweetness: 4, strength: 2, bitterness: 1, fruity: 5, sparkling: 1, scene: "relax", note: "果実の香りとやさしい甘さをゆっくり楽しめます。" },
  { name: "辛口の白ワイン", type: "ワイン", sweetness: 2, strength: 3, bitterness: 1, fruity: 3, sparkling: 1, scene: "meal", note: "すっきりした飲み口で、魚料理や前菜と好相性。" },
  { name: "赤ワイン", type: "ワイン", sweetness: 1, strength: 3, bitterness: 3, fruity: 2, sparkling: 1, scene: "meal", note: "ぶどうの果実味とほどよい渋みが楽しめます。" },
  { name: "スパークリングワイン", type: "ワイン", sweetness: 3, strength: 3, bitterness: 1, fruity: 3, sparkling: 5, scene: "party", note: "きめ細かな泡と果実の香りで華やかな気分に。" },
  { name: "純米吟醸", type: "日本酒", sweetness: 2, strength: 3, bitterness: 2, fruity: 3, sparkling: 1, scene: "meal", note: "米の旨みと穏やかな香りを食事と一緒に。" },
  { name: "にごり酒", type: "日本酒", sweetness: 4, strength: 3, bitterness: 1, fruity: 3, sparkling: 1, scene: "relax", note: "まろやかな口当たりと米由来のやさしい甘さ。" },
  { name: "純米酒", type: "日本酒", sweetness: 2, strength: 3, bitterness: 2, fruity: 2, sparkling: 1, scene: "meal", note: "米と米こうじを使った、食事に合わせやすい清酒。" },
  { name: "吟醸酒", type: "日本酒", sweetness: 3, strength: 3, bitterness: 1, fruity: 4, sparkling: 1, scene: "relax", note: "吟醸造りならではの香りをゆっくり楽しめます。" },
  { name: "麦焼酎ソーダ", type: "焼酎", sweetness: 1, strength: 3, bitterness: 1, fruity: 2, sparkling: 5, scene: "meal", note: "麦焼酎の香ばしさをソーダの泡ですっきりと。" },
  { name: "芋焼酎お湯割り", type: "焼酎", sweetness: 1, strength: 4, bitterness: 2, fruity: 3, sparkling: 1, scene: "relax", note: "芋焼酎の香りを温かいお湯割りで楽しむ飲み方。" },
  { name: "梅酒ロック", type: "果実酒", sweetness: 5, strength: 3, bitterness: 1, fruity: 4, sparkling: 1, scene: "relax", note: "梅の濃い香りを、氷でゆっくり味わえます。" },
  { name: "ラガービール", type: "ビール", sweetness: 1, strength: 3, bitterness: 3, fruity: 1, sparkling: 4, scene: "meal", note: "すっきりした苦味と喉ごしが食事にぴったり。" },
  { name: "ペールエール", type: "クラフトビール", sweetness: 2, strength: 3, bitterness: 3, fruity: 3, sparkling: 4, scene: "party", note: "柑橘を思わせる香りと穏やかな苦味が魅力。" },
  { name: "IPA", type: "クラフトビール", sweetness: 1, strength: 4, bitterness: 5, fruity: 3, sparkling: 4, scene: "relax", note: "ホップの強い苦味と華やかな香りを楽しむ一杯。" },
  { name: "黒ビール", type: "ビール", sweetness: 2, strength: 3, bitterness: 4, fruity: 2, sparkling: 2, scene: "relax", note: "ローストした香ばしさと深いコクが特徴です。" },
  { name: "ピルスナー", type: "ビール", sweetness: 1, strength: 3, bitterness: 3, fruity: 1, sparkling: 4, scene: "meal", note: "すっきりした飲み口に、ホップの香りとほどよい苦味。" },
  { name: "ヴァイツェン", type: "ビール", sweetness: 3, strength: 3, bitterness: 1, fruity: 4, sparkling: 4, scene: "relax", note: "小麦麦芽を使う、柔らかな口当たりのビアスタイル。" },
  { name: "スタウト", type: "ビール", sweetness: 2, strength: 4, bitterness: 4, fruity: 2, sparkling: 2, scene: "relax", note: "ロースト麦芽由来の香ばしさを楽しめる濃色ビール。" },
  { name: "シードル", type: "りんごのお酒", sweetness: 4, strength: 2, bitterness: 1, fruity: 5, sparkling: 4, scene: "party", note: "りんごの香りと軽い泡を気軽に楽しめます。" }
];

const questions = [
  { key: "sweetness", title: "どんな甘さが好み？", hint: "スライダーを動かして、好みの位置を選んでください。", options: [[1, "甘くない方が好き"], [2, "ほんのり甘いくらい"], [3, "どちらでも"], [4, "甘めが好き"], [5, "しっかり甘いものが好き"]] },
  { key: "strength", title: "アルコール感はどれくらい？", hint: "度数ではなく、味わいとして感じる強さを選びます。", options: [[1, "あまり感じないもの"], [2, "弱めがいい"], [3, "ほどほど"], [4, "しっかり感じるもの"], [5, "強く感じるもの"]] },
  { key: "bitterness", title: "苦味は好き？", hint: "ビールやハーブの苦味を想像して選んでください。", options: [[1, "苦味は苦手"], [2, "弱めなら大丈夫"], [3, "どちらでも"], [4, "けっこう好き"], [5, "苦いほど好き"]] },
  { key: "fruity", title: "果物の香りや味わいは？", hint: "柑橘、桃、ぶどうなどの風味を選んでください。", options: [[1, "あまりなくていい"], [2, "控えめがいい"], [3, "ほどほどに"], [4, "好き"], [5, "たっぷり楽しみたい"]] },
  { key: "sparkling", title: "炭酸は好き？", hint: "ソーダ割りやビールの泡を想像して選んでください。", options: [[1, "炭酸なしがいい"], [2, "弱めなら"], [3, "どちらでも"], [4, "好き"], [5, "強めが好き"]] },
  { key: "scene", title: "どんな場面で飲みたい？", hint: "おすすめのタイプ選びに反映します。", options: [["meal", "食事と一緒に"], ["relax", "ひとりでゆっくり"], ["party", "誰かと楽しく"]] }
];

const drinkTrivia = {
  "梅酒ソーダ": { text: "梅酒づくりでは、梅を酒と砂糖に漬け、時間をかけて熟成させる製法が紹介されています。", source: "CHOYA 梅酒づくり", url: "https://www.choya.co.jp/philosophy/umeshuzukuri/" },
  "カシスオレンジ": { text: "IBAの公式カクテルリストは、1961年に最初の50レシピが承認されたのが始まりです。", source: "International Bartenders Association", url: "https://iba-world.com/cocktails/" },
  "ファジーネーブル": { text: "カクテルは同じ名前でも、店やレシピによって材料の比率が変わることがあります。", source: "International Bartenders Association", url: "https://iba-world.com/cocktails/" },
  "白桃サワー": { text: "「サワー」はベースのお酒や果汁の組み合わせで、さまざまな味わいに作られます。", source: "International Bartenders Association", url: "https://iba-world.com/cocktails/" },
  "レモンサワー": { text: "レモンの酸味と炭酸の量を変えると、同じベースのお酒でも味の印象が変わります。", source: "International Bartenders Association", url: "https://iba-world.com/cocktails/" },
  "グレープフルーツサワー": { text: "果実酒の表示には、原料となる果実や製法に関する基準が定められています。", source: "国税庁 果実酒等の製法品質表示基準", url: "https://www.nta.go.jp/taxes/sake/hyoji/kajitsushu/index.htm" },
  "ハイボール": { text: "ウイスキーをソーダで割る飲み方。ウイスキーや炭酸の種類でも香りの印象が変わります。", source: "International Bartenders Association", url: "https://iba-world.com/cocktails/" },
  "ジントニック": { text: "ジンとトニックウォーターを合わせるカクテル。ライムなどの柑橘を添えるレシピもあります。", source: "International Bartenders Association", url: "https://iba-world.com/cocktails/" },
  "モスコミュール": { text: "IBAのレシピでは、ウォッカ、ジンジャービア、ライム果汁を使います。", source: "IBA Moscow Mule", url: "https://iba-world.com/moscow-mule/" },
  "モヒート": { text: "IBAのレシピには、ラム、ライム、ミント、砂糖、ソーダが登場します。", source: "IBA Mojito", url: "https://iba-world.com/mojito/" },
  "マリブコーク": { text: "コーラ割りのようなカクテルは、割り材の量で甘さや香りの感じ方を調整できます。", source: "International Bartenders Association", url: "https://iba-world.com/cocktails/" },
  "スクリュードライバー": { text: "ウォッカとオレンジジュースを合わせるカクテルとして知られています。", source: "International Bartenders Association", url: "https://iba-world.com/cocktails/" },
  "ミモザ": { text: "IBAのレシピはオレンジジュースとスパークリングワインを同量ずつ合わせます。", source: "IBA Mimosa", url: "https://iba-world.com/iba-cocktail/mimosa/" },
  "キューバリブレ": { text: "IBAのレシピはラム、コーラ、ライム果汁の3つが基本です。", source: "IBA Cuba Libre", url: "https://iba-world.com/iba-cocktail/cuba-libre/" },
  "ダイキリ": { text: "IBAの基本レシピはホワイトラム、ライム果汁、砂糖のシンプルな組み合わせです。", source: "IBA Daiquiri", url: "https://iba-world.com/iba-cocktail/daiquiri/" },
  "マルガリータ": { text: "IBAのレシピではテキーラ、トリプルセック、ライム果汁をシェイクします。", source: "IBA Margarita", url: "https://iba-world.com/iba-cocktail/margarita/" },
  "テキーラサンライズ": { text: "グレナデンを混ぜずに加えると、日の出のような色の層ができます。", source: "IBA Tequila Sunrise", url: "https://iba-world.com/iba-cocktail/tequila-sunrise/" },
  "甘口の白ワイン": { text: "国内産ぶどうを使い国内で醸造したワインは、「日本ワイン」と表示できます。", source: "国税庁 果実酒等の製法品質表示基準", url: "https://www.nta.go.jp/taxes/sake/hyoji/kajitsushu/index.htm" },
  "辛口の白ワイン": { text: "ワインの「辛口・甘口」は味わいの分類で、アルコール度数の強弱を示す言葉ではありません。", source: "国税庁 果実酒等の製法品質表示基準", url: "https://www.nta.go.jp/taxes/sake/hyoji/kajitsushu/index.htm" },
  "赤ワイン": { text: "「日本ワイン」の表示には、国内で収穫したぶどうを使い、国内で醸造する基準があります。", source: "国税庁 果実酒等の製法品質表示基準", url: "https://www.nta.go.jp/taxes/sake/hyoji/kajitsushu/index.htm" },
  "スパークリングワイン": { text: "発泡性ワインには、発酵で泡を生むものや炭酸を加えるものなど、複数の製法があります。", source: "国税庁 果実酒等の製法品質表示基準", url: "https://www.nta.go.jp/taxes/sake/hyoji/kajitsushu/index.htm" },
  "純米吟醸": { text: "純米吟醸酒は、精米歩合60%以下など、原料と製法の基準を満たした清酒です。", source: "国税庁 清酒の製法品質表示基準", url: "https://www.nta.go.jp/taxes/sake/hyoji/seishu/gaiyo/02.htm" },
  "にごり酒": { text: "清酒の特定名称は原料や製法などの基準で分類され、国税庁は8種類を定めています。", source: "国税庁 清酒の製法品質表示基準", url: "https://www.nta.go.jp/taxes/sake/hyoji/seishu/gaiyo/02.htm" },
  "純米酒": { text: "純米酒は米と米こうじを原料とし、精米歩合の上限は定められていません。", source: "国税庁 清酒の製法品質表示基準", url: "https://www.nta.go.jp/taxes/sake/hyoji/seishu/gaiyo/02.htm" },
  "吟醸酒": { text: "吟醸酒は精米歩合60%以下。吟醸造りでは低温でゆっくり発酵させます。", source: "国税庁 清酒の製法品質表示基準", url: "https://www.nta.go.jp/taxes/sake/hyoji/seishu/gaiyo/02.htm" },
  "麦焼酎ソーダ": { text: "焼酎の製造工程には、原料を発酵させたもろみを蒸留する工程があります。", source: "国税庁 酒のしおり・単式蒸留焼酎", url: "https://www.nta.go.jp/taxes/sake/shiori-gaikyo/shiori/2026/pdf/04-3.pdf" },
  "芋焼酎お湯割り": { text: "単式蒸留焼酎には、米・麦・さつまいもなど原料の異なる種類があります。", source: "国税庁 酒のしおり", url: "https://www.nta.go.jp/taxes/sake/shiori-gaikyo/shiori/2026/index.htm" },
  "梅酒ロック": { text: "梅酒づくりの例では、梅の果肉と種から成分を引き出すため、熟成工程を設けています。", source: "CHOYA 梅酒づくり", url: "https://www.choya.co.jp/philosophy/umeshuzukuri/" },
  "ラガービール": { text: "ビールにはラガー、エールなど多くのスタイルがあり、色だけでは味や強さは決まりません。", source: "Brewers Association Beer Style Guidelines", url: "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/" },
  "ペールエール": { text: "ペールエールは、麦芽の風味とホップの香り・苦味のバランスもスタイルの特徴です。", source: "Brewers Association Beer Style Guidelines", url: "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/" },
  "IPA": { text: "IPAはホップの香りや苦味が特徴のスタイルですが、香りの方向や強さは種類によって幅があります。", source: "Brewers Association Beer Style Guidelines", url: "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/" },
  "黒ビール": { text: "黒い色のビールには、ローストした麦芽由来の香ばしさがあるスタイルもあります。", source: "Brewers Association Beer Style Guidelines", url: "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/" },
  "ピルスナー": { text: "ドイツ風ピルスナーは、ノーブル系ホップの香りと、きりっとした苦味が特徴です。", source: "Brewers Association Beer Style Guidelines", url: "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/" },
  "ヴァイツェン": { text: "南ドイツ風ヴァイツェンは、小麦麦芽を50%以上使うスタイルです。", source: "Brewers Association Beer Style Guidelines", url: "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/" },
  "スタウト": { text: "ドライスタウトでは、焙煎した大麦由来のコーヒーのような香りが特徴になります。", source: "Brewers Association Beer Style Guidelines", url: "https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/" },
  "シードル": { text: "シードルはりんご果汁を発酵させて造るお酒。りんごの品種などで風味が変わります。", source: "Cider Australia", url: "https://www.cideraustralia.org.au/" }
};

const answers = {};
let currentQuestion = 0;

const elements = {
  form: document.querySelector("#quiz-form"),
  title: document.querySelector("#question-title"),
  hint: document.querySelector("#question-hint"),
  options: document.querySelector("#answer-options"),
  progress: document.querySelector("#progress-fill"),
  progressText: document.querySelector("#progress-text"),
  previous: document.querySelector("#previous-button"),
  next: document.querySelector("#next-button"),
  quizPanel: document.querySelector("#quiz-panel"),
  resultPanel: document.querySelector("#result-panel"),
  resultRank: document.querySelector("#result-rank"),
  resultName: document.querySelector("#result-name"),
  resultDescription: document.querySelector("#result-description"),
  resultType: document.querySelector("#result-type"),
  resultNote: document.querySelector("#result-note"),
  resultTrivia: document.querySelector("#result-trivia"),
  resultTriviaSource: document.querySelector("#result-trivia-source"),
  otherResults: document.querySelector("#other-results"),
  share: document.querySelector("#share-link")
};

function renderQuestion() {
  const question = questions[currentQuestion];
  elements.title.textContent = question.title;
  elements.hint.textContent = question.hint;
  elements.progress.value = currentQuestion + 1;
  elements.progressText.textContent = `${String(currentQuestion + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
  elements.previous.disabled = currentQuestion === 0;
  elements.next.textContent = currentQuestion === questions.length - 1 ? "結果を見る" : "次へ";
  elements.options.replaceChildren();
  const isSliderQuestion = question.key !== "scene";
  elements.options.classList.toggle("answer-options-three", !isSliderQuestion && question.options.length === 3);
  elements.options.classList.toggle("answer-options-sliders", isSliderQuestion);

  if (isSliderQuestion) {
    const sliderCard = document.createElement("div");
    sliderCard.className = "slider-card";
    const slider = document.createElement("input");
    slider.className = "taste-slider";
    slider.type = "range";
    slider.min = "1";
    slider.max = "5";
    slider.step = "0.1";
    slider.value = String(answers[question.key] ?? 3);
    slider.id = `taste-slider-${question.key}`;
    slider.setAttribute("aria-label", question.title);
    const sliderOutput = document.createElement("output");
    sliderOutput.className = "slider-value";
    sliderOutput.htmlFor = slider.id;
    const updateSlider = () => {
      const value = Number(slider.value);
      const nearestOption = question.options.reduce((nearest, option) =>
        Math.abs(Number(option[0]) - value) < Math.abs(Number(nearest[0]) - value) ? option : nearest
      , question.options[0]);
      answers[question.key] = value;
      slider.setAttribute("aria-valuetext", nearestOption[1]);
      sliderOutput.textContent = nearestOption[1];
      elements.next.disabled = false;
    };
    slider.addEventListener("input", updateSlider);
    const endpoints = document.createElement("div");
    endpoints.className = "slider-endpoints";
    const low = document.createElement("span");
    low.textContent = question.options[0][1];
    const high = document.createElement("span");
    high.textContent = question.options.at(-1)[1];
    endpoints.append(low, high);
    sliderCard.append(sliderOutput, slider, endpoints);
    elements.options.append(sliderCard);
    updateSlider();
  } else {
    question.options.forEach(([value, label], index) => {
      const option = document.createElement("label");
      option.className = "answer-option";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = question.key;
      input.value = value;
      input.checked = answers[question.key] === value;
      input.required = true;
      input.addEventListener("change", () => {
        answers[question.key] = value;
        elements.next.disabled = false;
      });
      const number = document.createElement("span");
      number.className = "option-number";
      number.textContent = String(index + 1).padStart(2, "0");
      const text = document.createElement("span");
      text.className = "option-label";
      text.textContent = label;
      const arrow = document.createElement("span");
      arrow.className = "option-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "↗";
      option.append(input, number, text, arrow);
      elements.options.append(option);
    });
  }

  elements.next.disabled = answers[question.key] === undefined;
}

function calculateDistance(user, drink) {
  const flavorKeys = ["sweetness", "strength", "bitterness", "fruity", "sparkling"];
  const flavorDistance = flavorKeys.reduce((total, key) => total + Math.abs(user[key] - drink[key]), 0);
  return flavorDistance + (user.scene === drink.scene ? 0 : 2);
}

function describeMatch(user, drink) {
  const matches = [
    ["sweetness", "甘さ"],
    ["strength", "アルコール感"],
    ["bitterness", "苦味"],
    ["fruity", "果実の風味"],
    ["sparkling", "炭酸" ]
  ].filter(([key]) => Math.abs(user[key] - drink[key]) <= 1).map(([, label]) => label);
  const matchedText = matches.length ? `${matches.slice(0, 3).join("・")}の好みに近い` : "全体のバランスが好みに近い";
  const sceneText = user.scene === drink.scene ? "選んだシーンにもよく合う" : "選んだシーンにも合わせやすい";
  return `${matchedText}一杯です。${sceneText}タイプから選びました。`;
}

function renderRankedResults(matches, selectedIndex = 0) {
  const selected = matches[selectedIndex];
  const formatRank = (rank) => String(rank).padStart(2, "0");
  elements.resultRank.textContent = `${formatRank(selectedIndex + 1)} / ${formatRank(matches.length)}`;
  elements.resultName.textContent = selected.name;
  elements.resultType.textContent = selected.type;
  elements.resultDescription.textContent = describeMatch(answers, selected);
  elements.resultNote.textContent = selected.note;
  const trivia = drinkTrivia[selected.name];
  elements.resultTrivia.textContent = trivia.text;
  elements.resultTriviaSource.href = trivia.url;
  elements.resultTriviaSource.textContent = `${trivia.source} ↗`;
  elements.otherResults.replaceChildren();

  matches.forEach((drink, index) => {
    if (index === selectedIndex) return;
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.className = "alternative-button";
    button.type = "button";
    button.setAttribute("aria-label", `${drink.name}の結果を表示`);
    const number = document.createElement("span");
    number.className = "other-number";
    number.textContent = formatRank(index + 1);
    const name = document.createElement("span");
    name.className = "other-name";
    name.textContent = drink.name;
    const type = document.createElement("span");
    type.className = "other-type";
    type.textContent = drink.type;
    button.append(number, name, type);
    button.addEventListener("click", () => {
      renderRankedResults(matches, index);
    });
    item.append(button);
    elements.otherResults.append(item);
  });

  const pageUrl = window.location.href.split("#")[0];
  const shareText = `さけまっちの診断結果は「${selected.name}」でした。あなたに合う一杯を診断してみよう。

豆知識：${trivia.text}

#さけまっち #お酒診断

${pageUrl}`;
  elements.share.href = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
}

function showResults() {
  const ranked = drinks.map((drink) => ({ ...drink, score: calculateDistance(answers, drink) }))
    .sort((first, second) => first.score - second.score);
  renderRankedResults(ranked.slice(0, 3));
  elements.quizPanel.hidden = true;
  elements.resultPanel.hidden = false;
  elements.resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

elements.form.addEventListener("submit", (event) => event.preventDefault());
elements.next.addEventListener("click", () => {
  if (answers[questions[currentQuestion].key] === undefined) return;
  if (currentQuestion === questions.length - 1) {
    showResults();
    return;
  }
  currentQuestion += 1;
  renderQuestion();
});
elements.previous.addEventListener("click", () => {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  renderQuestion();
});
document.querySelector("#restart-button").addEventListener("click", () => {
  Object.keys(answers).forEach((key) => delete answers[key]);
  currentQuestion = 0;
  elements.resultPanel.hidden = true;
  elements.quizPanel.hidden = false;
  renderQuestion();
  elements.quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

const ageGate = document.querySelector("#age-gate");
ageGate.removeAttribute("open");
ageGate.showModal();
ageGate.addEventListener("cancel", (event) => event.preventDefault());
document.querySelector("#age-yes").addEventListener("click", () => {
  ageGate.close();
  document.querySelectorAll("[inert]").forEach((element) => element.removeAttribute("inert"));
  document.querySelector("#answer-options input")?.focus();
});
document.querySelector("#age-no").addEventListener("click", () => {
  document.querySelector("#age-confirm-content").hidden = true;
  document.querySelector("#age-denied-content").hidden = false;
  document.querySelector("#age-denied-content a").focus();
});

renderQuestion();
