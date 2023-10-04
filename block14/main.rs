fn main() {
  let number_arrays: Vec<Vec<i32>> = vec![
      vec![11, 15],
      vec![1, 3, 5, 7, 9],
      vec![55, 81, 21, 91],
      vec![11],
  ];

  let strings_array: Vec<&str> = vec![
    "hello",
    "ukulele",
    "awesome",
    "onomatopoeia",
    "textbook",
  ];
  
  for number_array in number_arrays.iter() {
    let formatted_output: String = number_array
    .iter()
    .map(|&num| num.to_string())
    .collect::<Vec<String>>()
    .join(", ");
  
  println!("{}", formatted_output);
}

for word in strings_array.iter() {
  let (vowel_count, consonant_count) = word.chars().fold((0, 0), |(vowels, consonants), c| {
    match c.to_lowercase().next().unwrap() {
      'a' | 'e' | 'i' | 'o' | 'u' => (vowels + 1, consonants),
      c if c.is_ascii_alphabetic() => (vowels, consonants + 1),
      _ => panic!("Unexpected character: {}", c),
    }
  });
  println!("{} has {} vowels and {} consonants.", word, vowel_count, consonant_count);
}

  let forwards_arrays: Vec<Vec<i16>> = vec![
    vec![1, 2, 3],
    vec![1, 3, 5, 7, 9, 11],
    vec![20, 50, 30, 60, 200],
    vec![1, -1, 2, -3, 5, -8, 13]
  ];

  for array in forwards_arrays.iter() {
    let mut reverse_array = array.clone();
    reverse_array.reverse();
    
    let formatted_output: String = reverse_array
        .iter()
        .map(|&num| num.to_string())
        .collect::<Vec<String>>()
        .join(", ");
    
    println!("{}", formatted_output);
}
}