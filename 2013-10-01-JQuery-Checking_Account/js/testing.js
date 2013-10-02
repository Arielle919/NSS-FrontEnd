test( "adding", function() {
  deepEqual(adding(1,2), 3, "adding for deposit");
});

test("subtracting", function() {
  deepEqual(subtracting(5,3), 2, "subtracting for withdraw");
});
