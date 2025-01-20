import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AyahDisplay = ({ surah, ayahs }) => {
  return (
    <View style={styles.container}>
      {/* عنوان السورة */}
      <View style={styles.surahHeader}>
        <Text style={styles.surahTitle}>{surah?.name}</Text>
        {surah?.number !== 9 && ( // لا نعرض البسملة في سورة التوبة
          <Text style={styles.bismillah}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
        )}
      </View>

      {/* عرض الآيات */}
      <ScrollView style={styles.ayahsContainer}>
        {ayahs?.map((ayah, index) => (
          <View key={index} style={styles.ayahContainer}>
            <View style={styles.ayahContent}>
              <Text style={styles.ayahText}>
                {ayah.text} 
                <Text style={styles.ayahNumber}> ﴿{ayah.number}﴾</Text>
              </Text>
            </View>
            
            {/* التفسير */}
            <View style={styles.tafseerContainer}>
              <Text style={styles.tafseerText}>{ayah.tafseer}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  surahHeader: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#1F6F78',
  },
  surahTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F6F78',
    marginBottom: 10,
  },
  bismillah: {
    fontSize: 22,
    color: '#333',
    marginBottom: 20,
  },
  ayahsContainer: {
    flex: 1,
    padding: 15,
  },
  ayahContainer: {
    marginBottom: 20,
  },
  ayahContent: {
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1F6F78',
  },
  ayahText: {
    fontSize: 20,
    lineHeight: 36,
    color: '#333',
    textAlign: 'right',
  },
  ayahNumber: {
    fontSize: 16,
    color: '#1F6F78',
  },
  tafseerContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#F0F7F8',
    borderRadius: 8,
  },
  tafseerText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
    textAlign: 'right',
  },
});

export default AyahDisplay;
