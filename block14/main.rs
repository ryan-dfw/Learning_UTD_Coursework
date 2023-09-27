fn main() {
  let odd_arrays: Vec<Vec<i32>> = vec![
      vec![11, 15],
      vec![1, 3, 5, 7, 9],
      vec![55, 81, 21, 91],
      vec![11],
  ];

  for odd_array in odd_arrays.iter() {
      let formatted_output: String = odd_array
          .iter()
          .map(|&num| num.to_string())
          .collect::<Vec<String>>()
          .join(", ");

      println!("{}", formatted_output);
  }
}
