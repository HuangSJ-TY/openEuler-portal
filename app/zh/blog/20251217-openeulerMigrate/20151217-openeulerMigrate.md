---
title: 'openEuler 社区基础设施升级——代码托管平台切换'
date: '2025-12-18'
category: blog
tags:
  - openEuler
author: 'openEuler'
summary: 'openEuler 代码托管平台切换'
---

**openEuler社区开发者，您好！**    
我们是openEuler社区Infrastructure团队；

根据开放原子开源基金会openEuler项目群委员会决议，openEuler社区代码托管平台将由 gitee.com平台迁换至 atomgit.com 平台；
近期我们将牵头开展社区代码托管平台迁移工作，现将迁移工作相关事宜通知如下：

#### 我们需要您协助完成：
1.  登录 Gitee平台 (https://gitee.com/profile/account_information) ，如已登录则忽略；    
2.  根据指引(https://atomgit.com/openeuler-guide) 完成新账号绑定和同意书签署 ；   
3.  选择邮件末尾所附SIG组测试仓库进行试用，完成PR/ISSUE/Comment提交等相关测试 ；    

#### 您在社区的历史贡献数据不会因迁移受到影响。
####  我们将会：
1.  自动收集您绑定后的AtomGit平台账号；    
2.  将您的账号配置到community仓库(https://atomgit.com/openeuler/community) ，确保您的社区权限和原平台一致；    

#### 迁移计划：
1.  12月10日前完成社区代码仓/分支/PR/ISSUE/Comment等内容迁移，由Infrastructure团队联合托管平台统一实施，开发者无需操作；    
2.  12月10日开放账号迁移，开发者在登录Gitee(https://gitee.com) 后根据迁移指引(https://atomgit.com/openeuler-guide) 完成个人账号迁移；    
3.  12月10日至12月17日作为开发者试用期，提供试用仓库完成相关测试，测试仓库清单见邮件末尾，可联系基础设施增加测试仓库；    
4.  12月20日社区启动托管平台切换：    
       i. 原组织(https://gitee.com/openeuler, https://gitee.com/src-openeuler) 仓库将调整为只读，并发布平台切换公告；    
       ii. 开发者在在新平台组织(https://atomgit.com/openeuler, https://atomgit.com/src-openeuler) 下代码仓开展贡献；    
 
#### 迁移影响：
1.  迁移后，开发者参与贡献需重新fork atomgit平台代码仓库, 本地git config配置需同步适配atomgit账号邮箱；
2.  原Gitee平台未合入PR在迁移后如需叠加修改，需在AtomGit平台重新提交PR；
3.  可能出现双平台账号ID不一致(被他人占用)，昵称可以保持一致，Gitee账号绑定后原平台贡献会继承；


问题反馈：    
**如果在迁移过程中遇到任何问题，可通过以下渠道反馈，我们将及时处理：**
- 可以在Infrastructure仓库(https://atomgit.com/openeuler/infrastructure) 提交ISSUE反馈问题；
- 可以邮件联系 infra@openeuler.sh 反馈问题；
- 可以扫码加入迁移讨论微信群，及时沟通；   
  <img src="./media/wechat.png" style="width: 100%; max-width: 200px; height: auto; border: 1px solid #333; padding: 4px;" /><br>
- 可以扫描添加 openEuler 小助手，并发送 【 AtomGit 】关键字邀请您进迁移讨论微信群；   
  <img src="./media/assistant.png" style="width: 100%; max-width: 200px; height: auto; border: 1px solid #333; padding: 4px;" /><br>

**openEuler Infrastructure 团队**    
2025年12月12日

**附常见FAQ:**    
[openEuler社区代码托管平台迁移指导](https://atomgit.com/openeuler/openEuler-agreements/blob/main/Guide/migration-guide.md)

**附测试仓库清单：**
| SIG组 | 测试的仓库 |
|--|--|
| TC | http//atomgit.com/openeuler/community|
| TC | http//atomgit.com/openeuler/TC|
| sig-release-management | http//atomgit.com/openeuler/release-management|
| sig-release-management | http//atomgit.com/src-openeuler/openEuler-lsb|
| sig-QA | http//atomgit.com/openeuler/UTBotJava|
| sig-QA | http//atomgit.com/src-openeuler/UTBotJava|
| sig-QA | http//atomgit.com/openeuler/avocado-vt|
| sig-QA | http//atomgit.com/openeuler/mugen|
| sig-QA | http//atomgit.com/openeuler/tp-libvirt|
| sig-QA | http//atomgit.com/openeuler/tp-qemu|
| sig-recycle | http//atomgit.com/src-openeuler/python-feedparser|
| sig-recycle | http//atomgit.com/openeuler/isula-transform|
| sig-recycle | http//atomgit.com/openeuler/isula-transform|
| sig-compat-winapp | http//atomgit.com/src-openeuler/efl|
| sig-compat-winapp | http//atomgit.com/openeuler/compat-winapp|
| sig-ruby | http//atomgit.com/src-openeuler/rubygem-httpclient|
| sig-Ha | http//atomgit.com/src-openeuler/pcs|
| sig-Ha | http//atomgit.com/openeuler/ha-api|
| Runtime | http//atomgit.com/src-openeuler/libnice|
| sig-K8sDistro | http//atomgit.com/openeuler/ccps|
| sig-K8sDistro | http//atomgit.com/src-openeuler/nestos-kubernetes-deployer|
| sig-Arm | http//atomgit.com/openeuler/arm|
| Private | http//atomgit.com/src-openeuler/kiwi-template-openEuler|
| Kernel | http//atomgit.com/openeuler/kernel|
| Kernel | http//atomgit.com/src-openeuler/kernel|
| Kernel | http//atomgit.com/openeuler/kernel|
| Compiler | http//atomgit.com/src-openeuler/openjdk-17|
| Compiler | http//atomgit.com/openeuler/BiShengCLanguage|
| Compiler | http//atomgit.com/openeuler/bgmprovider|
| Compiler | http//atomgit.com/openeuler/BiShengCLanguage|
| Compiler | http//atomgit.com/openeuler/bishengjdk-11|
| Compiler | http//atomgit.com/openeuler/bishengjdk-17|
| Compiler | http//atomgit.com/openeuler/bishengjdk-21|
| Compiler | http//atomgit.com/openeuler/bishengjdk-8|
| Compiler | http//atomgit.com/openeuler/bishengjdk-riscv|
| Compiler | http//atomgit.com/openeuler/llvm-project|
| Compiler | http//atomgit.com/openeuler/bishengjdk-25|
| Base-service | http//atomgit.com/openeuler/sysSentry|
| Base-service | http//atomgit.com/src-openeuler/sysSentry|
| Base-service | http//atomgit.com/openeuler/libarchive-rust|
| Base-service | http//atomgit.com/openeuler/libxml2-rust|
| Base-service | http//atomgit.com/openeuler/re2-rust|
| Base-service | http//atomgit.com/openeuler/sysSentry|
| Base-service | http//atomgit.com/openeuler/unizip|
| Desktop | http//atomgit.com/src-openeuler/gjs|
| Desktop | http//atomgit.com/openeuler/liteview|
| sig-CloudNative | http//atomgit.com/openeuler/ktib|
| sig-CloudNative | http//atomgit.com/src-openeuler/containerd|
| sig-CloudNative | http//atomgit.com/openeuler/nestos-kernel|
| sig-CloudNative | http//atomgit.com/openeuler/openeuler-docker-images|
| sig-CloudNative | http//atomgit.com/openeuler/rubik|
| sig-ops | http//atomgit.com/openeuler/DevStore|
| sig-ops | http//atomgit.com/src-openeuler/rubygem-faraday-net_http_persistent|
| sig-ops | http//atomgit.com/openeuler/syscare|
| sig-intelligence | http//atomgit.com/src-openeuler/euler-copilot-shell|
| sig-intelligence | http//atomgit.com/openeuler/euler-copilot-framework|
| sig-intelligence | http//atomgit.com/openeuler/chatig|
| doc | http//atomgit.com/openeuler/docs|
| dev-utils | http//atomgit.com/src-openeuler/apache-commons-fileupload|
| dev-utils | http//atomgit.com/openeuler/sysmaster|
| dev-utils | http//atomgit.com/openeuler/sysmaster|
| sig-RISC-V | http//atomgit.com/openeuler/RISC-V|
| sig-RISC-V | http//atomgit.com/src-openeuler/opensbi|
| sig-RISC-V | http//atomgit.com/openeuler/RISC-V|
| bigdata | http//atomgit.com/openeuler/OmniStateStore|
| bigdata | http//atomgit.com/src-openeuler/spark|
| sig-mate-desktop | http//atomgit.com/openeuler/mate-desktop|
| sig-mate-desktop | http//atomgit.com/src-openeuler/pluma|
| sig-Java | http//atomgit.com/openeuler/Java-Packages|
| sig-Java | http//atomgit.com/src-openeuler/maven-dependency-tree|
| sig-HPC | http//atomgit.com/openeuler/hpcrunner|
| sig-HPC | http//atomgit.com/src-openeuler/apptainer|
| ecopkg | http//atomgit.com/openeuler/conda-ecopkgs|
| ecopkg | http//atomgit.com/src-openeuler/python-orderly-set|
| ecopkg | http//atomgit.com/openeuler/conda-ecopkgs|
| sig-AccLib | http//atomgit.com/src-openeuler/uadk_engine|
| sig-AccLib | http//atomgit.com/openeuler/sra_benchmark|
| sig-AccLib | http//atomgit.com/openeuler/ifm_nettle|
| sig-Gatekeeper | http//atomgit.com/openeuler/openeuler-jenkins|
| sig-Gatekeeper | http//atomgit.com/src-openeuler/python-jenkins|
| sig-SDS | http//atomgit.com/src-openeuler/ceph|
| sig-SDS | http//atomgit.com/openeuler/ceph_dev|
| sig-SDS | http//atomgit.com/openeuler/fastblock|
| sig-Long | http//atomgit.com/openeuler/GVirt|
| sig-Long | http//atomgit.com/src-openeuler/obmm|
| sig-Long | http//atomgit.com/openeuler/obmm|
| sig-UnifiedBus | http//atomgit.com/src-openeuler/ubutils|
| sig-UnifiedBus | http//atomgit.com/openeuler/umdk|
| sig-UnifiedBus | http//atomgit.com/openeuler/cdma|
| sig-UnifiedBus | http//atomgit.com/openeuler/ham|
| sig-UnifiedBus | http//atomgit.com/openeuler/ubctl|
| sig-UnifiedBus | http//atomgit.com/openeuler/ubturbo|
| sig-UnifiedBus | http//atomgit.com/openeuler/ubutils|
| sig-UnifiedBus | http//atomgit.com/openeuler/umdk|
| sig-UnifiedBus | http//atomgit.com/openeuler/ummu|
| sig-YuanRong | http//atomgit.com/src-openeuler/yuanrong|
| sig-YuanRong | http//atomgit.com/openeuler/yuanrong|
| sig-YuanRong | http//atomgit.com/openeuler/ray-adapter|
| sig-YuanRong | http//atomgit.com/openeuler/spring-adapter|
| sig-YuanRong | http//atomgit.com/openeuler/yuanrong|
| sig-YuanRong | http//atomgit.com/openeuler/yuanrong-frontend|
| sig-YuanRong | http//atomgit.com/openeuler/yuanrong-serve|
| G11N | http//atomgit.com/openeuler/globalization|
| sig-UB-ServiceCore | http//atomgit.com/openeuler/ubs-engine|
| sig-UB-ServiceCore | http//atomgit.com/src-openeuler/ubs-engine|
| sig-UB-ServiceCore | http//atomgit.com/openeuler/knet|
| sig-UB-ServiceCore | http//atomgit.com/openeuler/ubs-comm|
| sig-UB-ServiceCore | http//atomgit.com/openeuler/ubs-engine|
| Marketing | http//atomgit.com/openeuler/presentations|
| Virt | http//atomgit.com/src-openeuler/qemu|
| Virt | http//atomgit.com/openeuler/qemu|
| Virt | http//atomgit.com/openeuler/qemu|
| Virt | http//atomgit.com/openeuler/skylark|
| Virt | http//atomgit.com/openeuler/stratovirt|
| DB | http//atomgit.com/openeuler/cantian|
| DB | http//atomgit.com/src-openeuler/geolatte-geom|
| DB | http//atomgit.com/openeuler/cantian|
| DB | http//atomgit.com/openeuler/cantian-connector-mysql|
| sig-SBC | http//atomgit.com/openeuler/raspberrypi-kernel|
| sig-SBC | http//atomgit.com/src-openeuler/ao.space|
| GNOME | http//atomgit.com/src-openeuler/gnome-shell-extension-gsconnect|
| sig-DDE | http//atomgit.com/src-openeuler/dde|
| sig-DDE | http//atomgit.com/openeuler/DDE-GoCode|
| sig-desktop-apps | http//atomgit.com/src-openeuler/thunderbird|
| sig-epkg | http//atomgit.com/openeuler/epkg|
| sig-epkg | http//atomgit.com/src-openeuler/epkg|
| xfce | http//atomgit.com/src-openeuler/catfish|
| sig-message-middleware | http//atomgit.com/src-openeuler/kafka|
| sig-message-middleware | http//atomgit.com/openeuler/rocketmq-operator|
| sig-BMC | http//atomgit.com/openeuler/MetaBMC|
| sig-MCP-Tools-Ecosystem | http//atomgit.com/openeuler/ctdeployer|
| sig-FangTian | http//atomgit.com/openeuler/ft_engine|
| sig-FangTian | http//atomgit.com/src-openeuler/ft_surface|
| sig-FangTian | http//atomgit.com/openeuler/arkui-linux|
| sig-FangTian | http//atomgit.com/openeuler/ft_engine|
| sig-FangTian | http//atomgit.com/openeuler/ft_flutter|
| sig-FangTian | http//atomgit.com/openeuler/ft_mmi|
| sig-FangTian | http//atomgit.com/openeuler/ft_multimedia|
| sig-minzuchess | http//atomgit.com/openeuler/duoyibu-ai|
| user-committee | http//atomgit.com/openeuler/user-committee|
| A-Tune | http//atomgit.com/openeuler/A-Tune|
| A-Tune | http//atomgit.com/src-openeuler/A-Tune|
| A-Tune | http//atomgit.com/openeuler/sysboost|
| sig-openstack | http//atomgit.com/src-openeuler/python-trio|
| sig-openstack | http//atomgit.com/openeuler/openstack|
| sig-openstack | http//atomgit.com/openeuler/hostha|
| sig-python-modules | http//atomgit.com/src-openeuler/python-starlette|
| sig-python-modules | http//atomgit.com/openeuler/python-multi_key_dict|
| Programming-language | http//atomgit.com/src-openeuler/valgrind|
| sig-embedded | http//atomgit.com/openeuler/lerobot_ros2|
| sig-embedded | http//atomgit.com/src-openeuler/etipc|
| sig-embedded | http//atomgit.com/openeuler/yocto-embedded-tools|
| sig-embedded | http//atomgit.com/openeuler/yocto-meta-openeuler|
| sig-embedded | http//atomgit.com/openeuler/yocto-poky|
| sig-memsafety | http//atomgit.com/src-openeuler/utpam|
| sig-memsafety | http//atomgit.com/openeuler/utpam|
| sig-memsafety | http//atomgit.com/openeuler/easybox|
| sig-golang | http//atomgit.com/src-openeuler/golang|
| sig-golang | http//atomgit.com/openeuler/golang|
| sig-golang | http//atomgit.com/openeuler/golang|
| sig-nodejs | http//atomgit.com/src-openeuler/nodejs|
| sig-KIRAN-DESKTOP | http//atomgit.com/src-openeuler/kiran-cc-daemon|
| sig-KIRAN-DESKTOP | http//atomgit.com/openeuler/kiran-control-panel|
| sig-Intel-Arch | http//atomgit.com/openeuler/intel-kernel|
| sig-Intel-Arch | http//atomgit.com/src-openeuler/openvino|
| sig-Intel-Arch | http//atomgit.com/openeuler/Intel-glibc|
| sig-CICD | http//atomgit.com/src-openeuler/ccb|
| sig-CICD | http//atomgit.com/openeuler/ccb|
| Packaging | http//atomgit.com/src-openeuler/copy-jdk-configs|
| sig-OceanBase | http//atomgit.com/src-openeuler/oceanbase-ce|
| sig-security-facility | http//atomgit.com/src-openeuler/TSB-agent|
| sig-security-facility | http//atomgit.com/openeuler/TSB-agent|
| sig-security-facility | http//atomgit.com/openeuler/attest-tools|
| sig-security-facility | http//atomgit.com/openeuler/digest-list-tools|
| sig-security-facility | http//atomgit.com/openeuler/dim|
| sig-security-facility | http//atomgit.com/openeuler/openssl|
| sig-security-facility | http//atomgit.com/openeuler/dim_tools|
| Networking | http//atomgit.com/openeuler/bridge-utils|
| Networking | http//atomgit.com/src-openeuler/http-parser|
| Networking | http//atomgit.com/openeuler/curl-rust|
| sig-KDE | http//atomgit.com/openeuler/openEuler-menus|
| sig-KDE | http//atomgit.com/src-openeuler/kde-connect|
| iSulad | http//atomgit.com/openeuler/lcr|
| iSulad | http//atomgit.com/src-openeuler/lxc|
| iSulad | http//atomgit.com/openeuler/isula-build|
| iSulad | http//atomgit.com/openeuler/iSulad|
| iSulad | http//atomgit.com/openeuler/lcr|
| sig-ebpf | http//atomgit.com/src-openeuler/gala-gopher|
| sig-ebpf | http//atomgit.com/openeuler/gala-gopher|
| sig-ebpf | http//atomgit.com/openeuler/gala-gopher|
| sig-QT | http//atomgit.com/src-openeuler/qt5-doc|
| Infrastructure | http//atomgit.com/openeuler/infrastructure|
| Infrastructure | http//atomgit.com/openeuler/signatrust|
| sig-Migration | http//atomgit.com/src-openeuler/restic|
| sig-Migration | http//atomgit.com/openeuler/migration-tools|
| oVirt | http//atomgit.com/src-openeuler/python-ovirt-engine-sdk4|
| sig-power-efficient | http//atomgit.com/src-openeuler/powerapi|
| sig-power-efficient | http//atomgit.com/openeuler/powerapi|
| sig-power-efficient | http//atomgit.com/openeuler/eagle|
| sig-EasyLife | http//atomgit.com/openeuler/sync-bot|
| sig-EasyLife | http//atomgit.com/openeuler/pkgship|
| sig-EasyLife | http//atomgit.com/openeuler/pkgship|
| sig-industrial-control | http//atomgit.com/openeuler/Xen|
| sig-industrial-control | http//atomgit.com/src-openeuler/Xen|
| sig-Hygon | http//atomgit.com/openeuler/hygon-edk2|
| sig-confidential-computing | http//atomgit.com/openeuler/virtCCA_sdk|
| sig-confidential-computing | http//atomgit.com/src-openeuler/secGear|
| sig-ROS | http//atomgit.com/openeuler/ros|
| sig-ROS | http//atomgit.com/src-openeuler/rosgpt|
| System-tool | http//atomgit.com/src-openeuler/custodia|
| System-tool | http//atomgit.com/openeuler/ConfigOrchestrator|
| sig-perl-modules | http//atomgit.com/src-openeuler/perl-Parse-Gitignore|
| sig-UKUI | http//atomgit.com/openeuler/kylin-user-guide|
| sig-UKUI | http//atomgit.com/src-openeuler/ukui-control-center|
| security-committee | http//atomgit.com/openeuler/security-committee|
| sig-Edge | http//atomgit.com/src-openeuler/debhelper|
| sig-Edge | http//atomgit.com/openeuler/sig-Edge|
| sig-DPU | http//atomgit.com/src-openeuler/dpu-utilities|
| sig-DPU | http//atomgit.com/openeuler/dpu-utilities|
| sig-DPU | http//atomgit.com/openeuler/dpu-utilities|
| sig-bio | http//atomgit.com/src-openeuler/cufflinks|
| sig-bio | http//atomgit.com/openeuler/bioinformatics|
| sig-Compatibility-Infra | http//atomgit.com/openeuler/kyclassifier|
| sig-Compatibility-Infra | http//atomgit.com/src-openeuler/oec-hardware|
| sig-OSCourse | http//atomgit.com/openeuler/git-basics|
| sig-OSCourse | http//atomgit.com/src-openeuler/gtkwave|
| sig-OpenDesign | http//atomgit.com/openeuler/opendesign-components|
| ai | http//atomgit.com/src-openeuler/vllm|
| ai | http//atomgit.com/src-openeuler/onnx|
| Others | http//atomgit.com/src-openeuler/ImageMagick|
| sig-compliance | http//atomgit.com/openeuler/compliance|
| sig-porting-platform-winapp | http//atomgit.com/src-openeuler/dotnet|
| sig-porting-platform-winapp | http//atomgit.com/openeuler/vs2qt|
| sig-IDE | http//atomgit.com/src-openeuler/oeDevPlugin|
| sig-IDE | http//atomgit.com/openeuler/oeDevPlugin|
| sig-sbom | http//atomgit.com/openeuler/xlin-sbom-analysis|
| sig-sbom | http//atomgit.com/src-openeuler/xlin-sbom-analysis|
| sig-cinnamon | http//atomgit.com/src-openeuler/nemo|
| sig-Talent-and-Service | http//atomgit.com/openeuler/service_capability|
| Storage | http//atomgit.com/src-openeuler/hsak|
| Storage | http//atomgit.com/openeuler/storprototrace|
| Application | http//atomgit.com/src-openeuler/weechat|
| Application | http//atomgit.com/openeuler/custom_build_tool|
| Computing | http//atomgit.com/openeuler/libgmem|
| Computing | http//atomgit.com/src-openeuler/gdb|
| sig-high-performance-network | http//atomgit.com/openeuler/dpdk|
| sig-high-performance-network | http//atomgit.com/src-openeuler/dpdk|
| sig-OS-Builder | http//atomgit.com/src-openeuler/oemaker|
| sig-OS-Builder | http//atomgit.com/openeuler/oemaker|
| sig-epol | http//atomgit.com/src-openeuler/live555|
| sig-haskell | http//atomgit.com/src-openeuler/ghc-time-manager|
| sig-distributed-middleware | http//atomgit.com/src-openeuler/libcoap|
| sig-distributed-middleware | http//atomgit.com/openeuler/dsoftbus_standard|
| sig-Zephyr | http//atomgit.com/src-openeuler/zephyr|
| sig-Zephyr | http//atomgit.com/openeuler/zvm|
| sig-WayCa | http//atomgit.com/src-openeuler/hikptool|
| sig-WayCa | http//atomgit.com/openeuler/hikptool
