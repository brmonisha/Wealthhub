import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CardProps {
  title: string;
  description: string;
  color: string[];
  iconColor: string;
}

const Card: React.FC<CardProps> = ({ title, description, color, iconColor }) => {
    return (
      <View style={[styles.card, { backgroundColor: color[1] }]}>
       
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
  
     
        <TouchableOpacity style={[styles.iconContainer, { backgroundColor: color[0] }]}>
          <Ionicons name="arrow-forward" size={20} color={iconColor} />
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    card: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20, 
      marginVertical: 15, 
      borderRadius: 10,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    textContainer: {
      flex: 1,
      marginRight: 15, 
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#000',
      marginBottom: 8, 
    },
    cardDescription: {
      fontSize: 14,
      color: '#6B7280',
      lineHeight: 20, 
    },
    iconContainer: {
      marginTop:35,
      width: 35, 
      height: 35, 
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default Card;