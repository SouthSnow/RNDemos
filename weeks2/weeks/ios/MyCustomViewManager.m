//
//  MyCustomViewManager.m
//  weeks
//
//  Created by pangfuli on 16/3/15.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "MyCustomViewManager.h"

@interface MyCustomViewManager ()
@property (nonatomic, readwrite, copy) NSString *customString;
@end

@implementation MyCustomViewManager

RCT_EXPORT_MODULE()

- (UIView*)view {
  return [[UIView alloc]init];
}

RCT_EXPORT_VIEW_PROPERTY(customString, NSString)

@end
