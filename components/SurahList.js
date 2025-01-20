import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SurahItem = ({ surah, onSelect }) => (
  <TouchableOpacity 
    style={styles.surahItem} 
    onPress={() => onSelect(surah)}
  >
    <View style={styles.surahContainer}>
      <Text style={styles.surahNumber}>{surah.number}</Text>
      <View style={styles.surahInfo}>
        <Text style={styles.surahName}>{surah.name}</Text>
        <Text style={styles.surahType}>{surah.type}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const SurahList = ({ onSelectSurah }) => {
  // هذه بيانات تجريبية، سيتم استبدالها بالبيانات الحقيقية
  const surahs = [
    { number: 1, name: 'الفاتحة', type: 'مكية' },
    { number: 2, name: 'البقرة', type: 'مدنية' },
    // ... باقي السور
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>السور</Text>
      <ScrollView>
        {surahs.map((surah) => (
          <SurahItem 
            key={surah.number} 
            surah={surah} 
            onSelect={onSelectSurah}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#1F6F78',
    color: '#FFF',
  },
  surahItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  surahContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  surahNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#1F6F78',
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 30,
    marginRight: 10,
  },
  surahInfo: {
    flex: 1,
  },
  surahName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  surahType: {
    fontSize: 12,
    color: '#666',
  },
});

export default SurahList;
