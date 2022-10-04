package challenges_leetcode;

public class Palindrome_Number {
    public boolean isPalindrome(int x) {
        String reverse = "";
        String convToStr = String.valueOf(x);
        int length = convToStr.length();
        for(int i = length - 1; i >= 0;i--){
            reverse = reverse + convToStr.charAt(i);
        }
        if(convToStr.equals(reverse)){
            return true;
        }
        else {
            return false;
        }
    }
}
