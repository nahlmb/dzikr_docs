# Book Tool 
Book tool actually is tool for showing adzkar and du'a, we named it book because we imagining a collection of du'as or dzikr as a book that contain list of prayer and book, not only that, in the future we also hope to present hadith books.

Same with Quran Tool, you need to download the Book data first, as this following.

## Requirement
1. You can download the data hare, the extract it : [this link](/zip/books.zip)
2. Put quran directory on ./assets folder of your project
3. register the asset in pubspec.yaml, as below
```yaml
assets:
  - assets/book/
```

## Usage
1. Init the tool
```dart
BookTool bookTool = BookTool.init();
```
2. Get the data
```dart
List<Book> duaBook = await bookTool.getDuaBook();
List<Book> dzikrBook = await bookTool.getDzikrBook();
```
3. Show doa and dzikr to your user, you can use ListView to render every item.
4. You can process book detail by your own, or easily with [DzikrReader] as use it as following
```dart
class DzikrDetailPage extends StatelessWidget {
  const DzikrDetailPage({Key? key, required this.book}) : super(key: key);

  final Book book;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarWidget.getAppBar(context, title: book.title!),
      body: DzikrReader(book: book),
    );
  }
}
```