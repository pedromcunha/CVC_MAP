story_list = [
  [ "Ithought I was too young 1", "something", "something", "something" ],
  [ "Ithought I was too  2", "something", "something", "something" ],
  [ "Ithought I was 3", "something", "something", "something" ],
  [ "Ithought I  4", "something", "something", "something" ],
  [ "Ithought I was too young 5", "something", "something", "something" ], 
  [ "Ithought I was too young 6", "something", "something", "something" ], 
  [ "Ithought I was too young 6", "something", "something", "something" ]
]

story_list.each do |title, sec_1, sec_2, sec_3|
  Story.create( title: title, section_1:  sec_1 , section_2: sec_2 , section_3: sec_3)
end
