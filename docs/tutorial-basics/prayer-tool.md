# Prayer Time Tool
Prayer Time Tool is tool for showing prayer schedule based on user location, this package contain geolocator and need premission for using gps, the Tool is returning today and monthly prayer schedule, also device location info that can be showed to user.

## Requirement
This package include [Geocoding](https://pub.dev/packages/geolocator) that need user premission for process device location.

1) Please following official [Geocoding Usage Guide](https://pub.dev/packages/geolocator#usage) for adding permission both in Android and iOS.

after that all done Insyaallah, the tool is ready for use.

## Usage

1. Init the Tool
```dart
QuranTool quranTool = QuranTool.init();
```
2. Get the prayer time
```dart
getPrayerTime() async {
  try {
      PrayerTimeTool prayerTimeTool = await PrayerTimeTool.init();
      PrayerTime prayer = prayerTimeTool.prayer;
    } on DzikrErrorConfig catch (error) {
      // error
      print(error.message);
    }
}
```
3. Show the data to your user
```dart
Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
        Text(prayer
            .todaySchedule.closestPrayer.closestPrayer,
        style: ThemeConfig.textTheme(context)
            .headline1
        ),
        Text(prayer.todaySchedule.closestPrayer.closestTime,
        style: ThemeConfig.textTheme(context)
            .headline2
        ),
        Text("${PrayerTimeTool.findClosestPrayerTime(prayer).todaySchedule.closestPrayer.durationToClosestPrayer.inMinutes} Minute to ${prayer.todaySchedule.closestPrayer.closestPrayer}"),
    ],
);
```

Awesome ✨ Masyaallah.