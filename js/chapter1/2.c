/**
 * 1.2
 * 
 * Write code to reverse a C-Style String. (C-String means that “abcd” is 
 * represented as five characters, including the null character.)
 */

#include <stdio.h>
#include <string.h>

void reverse1(char *s)
{
  size_t len = strlen(s);
  char *t = s + len - 1;
  while (t >= s) {
    printf("%c", *t);
    t = t - 1;
  }
  puts("");
}

void reverse2(char *str)
{
  char *end = str;
  if (str) {
    while (*end) {
      ++end;
    }
    --end;
    char tmp;
    while (str < end) {
      tmp = *str;
      *str++ = *end;
      *end-- = tmp;
    }
  }
}

void reverse3(char *str)
{
  int i = 0;
  int j = strlen(str) - 1;
  char tmp;
  while (i < j) {
    tmp = str[i];
    str[i] = str[j];
    str[j] = tmp;
    i++; j--;
  }
}

int main()
{
  char str[] = "abcde";
  reverse1(str);
  reverse2(str);
  printf("%s\n", str);
  reverse3(str);
  printf("%s\n", str);
  return 0;
}