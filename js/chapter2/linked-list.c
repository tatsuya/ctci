#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct node {
  char *name;
  struct node *next;
} node;

void display(node *head)
{
  node *n = head;
  for(; n != NULL; n = n->next) {
    printf("%s\n", n->name);
  }
}

node* create(char *name)
{
  node *n = malloc(sizeof(node));
  n->name = strdup(name);
  n->next = NULL;
  return n;
}

void release(node *head)
{
  node *n = head;
  node *next = NULL;
  for (; n != NULL; n = next) {
    next = n->next;
    free(n->name);
    free(n);
  }
}

int main()
{
  node *a = create("a");
  node *b = create("b");
  node *c = create("c");

  a->next = b;
  b->next = c;

  display(a);
  release(a);

  return 0;
}