# Quran Tool
Quran is one of the most feature that we hope can provide with well in this package. This feature is still under development, there is minor in the code but it works!

This tool provide Quran both in page mode and list mode.
And the cool part Quran Tool provide instant Quran render widget, we will show the detail of it bellow insyaallah.

## Requirement
Quran Tool is using static Quran data, you need to downloaded the data first, put it into assets/quran directory, register the asset path into pubspec.yaml the you'll be able to use the tool insyaallah.

1. You can downloadthe data hare, the extract it : [this link](/zip/quran.zip)
2. Put quran directory on ./assets folder of your project
3. register the asset in pubspec.yaml, as below
```yaml
assets:
  - assets/quran/
```

then the tool is ready to use insyaallah.

## Usage
The easy wasy to show Quran to your app user is using [QuranPageReader].
as easy as bellow instruction.

1. return the Quran page in your page/widget.
```dart
class QuranPage extends StatelessWidget {
  const QuranPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return QuranPageReader(
      config: QuranPageReaderConfig(),
    );
  }
}
```

if there is no mistake, Quran data will be processed and showed to user 👍

2) via parameter you can set the intial Quran page that want to be showed, you even able put appbar on your [QuranPageReader] or listen when user change the Quran Page.
3) And with [QuranPageReaderConfig] you able to set colors and theming for your [QuranPageReader], also to choose is using page mode or list mode, and to show bottom page indicator or not.

then, how to show list of surah and juzs?
Quran Tool will provide the data for you.

1. Init Quran Tool
```dart
QuranTool quranTool = QuranTool.init();
```
2. get the data
```dart
QuranJuzs juzs = await quranTool.getQuranJuzs();
QuranChapters surah = await quranTool.getQuranChapter();
```

you even able to get whole Quran data, if you want to manually process it without [QuranPageReader].
```dart
List<QuranPage> pages = await quranTool.getQuranPages();
```
