# jQuery Placeholder

## これはなに

HTML5のplaceholder属性のようにガイドテキストを薄く表示する為のjQueryプラグイン。  

## 使い方

### HTML

	<input type="text" value="" data-placeholder="Input your name" class="mytext" />

data-placeholder属性でデフォルト値を設定

### CSS

	.jquery-placeholder {
		color:#cccccc;
	}

ガイドテキスト表示時のスタイルをクラスで記述  
初期設定ではクラス名は"jquery-placeholder"になっています

### JavaScript

	$("input.mytext").placeholder();

引数でオプションを渡すことも出来ます。

	$("input.mytext").placeholder({
		defaultClass : "myclass"
	});

引数で文字列を渡すと、defaultClassに渡されます。
上と下のコードは同義です。

	$("input.mytext").placeholder( "myclass" );


### オプション

String defaultClass  
: ガイドテキスト表示時にあてるクラス名

### Lisence

The MIT License

Copyright (c) 2011 Matsukaze.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

