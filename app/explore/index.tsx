import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from '../../components/Card';
import { data } from '../../constants/data';

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Explore Mutual Funds</Text>
      <Text style={styles.headerDescription}>
        Lorem ipsum dolor ra samet ina ki lorem ipsum dolor ra samet ina ki
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            color={item.color}
            iconColor={item.iconColor}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  headerDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 10,
  },
});

export default ExploreScreen;
