package challenges_leetcode;

/**
 * @author "Anil Timalsina"
 *
 * "10/04/2022"
 */

public class Length_Of_Last_Word {
    public int lengthOfLastWord(String s) {
        String[] strArray = s.split(" ");
        String lastStr = strArray[strArray.length - 1];
        int strLength = lastStr.length();
        return strLength;
    }
}
