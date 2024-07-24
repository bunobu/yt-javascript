"use strict";

/**
 * >>> observerの定義
 */

// optionの指定
const options = {
  // - root - どの要素を基準として監視するか
  // null: ルート要素はビューポート　デヴァイス基準で監視
  // 指定されなかった場合、または null の場合は既定でブラウザーのビューポートが使用されます。
  root: null,

  // - rootMargin - ルートのマージン
  // 基準となる要素の周囲にマージンを設定することができます。
  rootMargin: "0px",

  // - threshold
  // 単一の数値または数値の配列で指定
  // 見える範囲が 50% を超えたときのみ検出する場合は値 0.5 を使用します。
  // 25% を超える度にコールバックを実行する場合は、 [0, 0.25, 0.5, 0.75, 1] という配列を指定します。
  // 既定値は 0 です。
  // ターゲットの要素が1pxでもビューポートに表示されるとコールバックが実行されます。

  // 1.0: ターゲットの要素がビューポートの中に完全に表示されるとコールバックが実行されます。

  threshold: 1.0,
};

// observerのインスタンスを作成して、コールバック関数とオプションを渡す
const observer = new IntersectionObserver(callback, options);

/**
 * <<< observerの定義
 */

/**
 * >>> targetの要素を作成して監視
 */

// targetの要素を取得
const target = document.getElementById("title");
// 監視の実行 - targetがobserverで指定された要素の基準を満たすときにコールバック関数が実行される
observer.observe(target);

/**
 * <<< targetの要素を作成して監視
 */

/**
 * >>> callback関数の作成
 *
 * callback関数はページが読み込まれる or targetがビューポートに表示されると実行される
 *
 * 引数について
 * - entries: IntersectionObserverEntryオブジェクトの配列
 * - observer: IntersectionObserverオブジェクト
 */

function callback(entries, observer) {
  console.log("callback関数が呼ばれました");
  console.log("callback関数の引数entries", entries);
  console.log("callback関数の引数observer", observer);

  entries.forEach((entry) => {
    // それぞれの項目は、観測された 1 つの対象要素の交差状態の変化を示している。
    //
    // - entry.boundingClientRect
    // そのビューポートに対する相対位置に関する情報を返します。
    console.log("entry.boundingClientRect", entry.boundingClientRect);

    //
    // - entry.intersectionRatio
    // intersectionRect と boundingClientRect の比率を返します。
    // ターゲットの要素がビューポートにどの程度表示されているかを示します。
    // 完全に表示されている場合は 1、表示されていない場合は 0 です。
    console.log("entry.intersectionRatio", entry.intersectionRatio);
    //
    // - entry.intersectionRect
    // 対象の表示領域の矩形を表す
    // ターゲットがビューポートに表示されている場合、その位置情報が返されます。
    console.log("entry.intersectionRect", entry.intersectionRect);
    //
    //
    // - entry.isIntersecting
    // プロパティの値をチェックして、その項目が現在ルートと交差している要素を表しているかどうかを確認
    console.log("entry.isIntersecting", entry.isIntersecting);
    //
    // - entry.rootBounds
    // ルート要素の矩形を表す
    // ルート要素がビューポートである場合、ビューポートの位置情報が返されます。
    console.log("entry.rootBounds", entry.rootBounds);
    //
    // - entry.target
    // 監視されている要素を返す
    console.log("entry.target", entry.target);
    //
    // - entry.time
    // 交差が発生した時間を返す
    console.log("entry.time", entry.time);
  });
}

/**
 * <<< callback関数の作成
 */
