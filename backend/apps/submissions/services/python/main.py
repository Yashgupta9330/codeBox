class Solution:
    def reverseWords(self, s: str) -> str:
        # Your code here
        pass

# Read input from standard input
if _name_ == "_main_":
    # Read the input string
    s = input().strip()
    
    # Create solution object and call the function
    solution = Solution()
    result = solution.reverseWords(s)
    
    # Print result
    print(result)