# Intersection Observerについて

[YouTubeリンク](https://www.youtube.com/watch?v=B21k7cq8Go0)

## Tips

- ブラウザ標準のAPIでスクロールを感知して処理を実行することができる。
- JSのscrollイベントはスクロールが発生する度処理が行われるので、パフォーマンスがあまりよくないが、Intersection Observerは要素が画面の基準位置を重なった時に処理が実行されるのでパフォーマンス的にはよくなる。